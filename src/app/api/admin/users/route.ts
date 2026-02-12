import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  await dbConnect();

  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20")));
  const search = searchParams.get("search") || "";
  const tier = searchParams.get("tier") || "";
  const skip = (page - 1) * limit;

  const filter: Record<string, unknown> = {};

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  if (tier === "free" || tier === "pro") {
    filter.tier = tier;
  }

  const [users, total] = await Promise.all([
    User.find(filter)
      .select("-hashedPassword")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    User.countDocuments(filter),
  ]);

  return NextResponse.json({
    users,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}
