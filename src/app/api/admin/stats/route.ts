import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  await dbConnect();

  const now = new Date();

  const startOfDay = new Date(now);
  startOfDay.setUTCHours(0, 0, 0, 0);

  const startOfWeek = new Date(now);
  startOfWeek.setUTCDate(now.getUTCDate() - now.getUTCDay());
  startOfWeek.setUTCHours(0, 0, 0, 0);

  const startOfMonth = new Date(now.getUTCFullYear(), now.getUTCMonth(), 1);

  const [totalUsers, proUsers, newUsersToday, newUsersThisWeek, newUsersThisMonth] =
    await Promise.all([
      User.countDocuments(),
      User.countDocuments({ tier: "pro" }),
      User.countDocuments({ createdAt: { $gte: startOfDay } }),
      User.countDocuments({ createdAt: { $gte: startOfWeek } }),
      User.countDocuments({ createdAt: { $gte: startOfMonth } }),
    ]);

  return NextResponse.json({
    totalUsers,
    proUsers,
    freeUsers: totalUsers - proUsers,
    newUsersToday,
    newUsersThisWeek,
    newUsersThisMonth,
  });
}
