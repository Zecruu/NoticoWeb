import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { requireAdmin } from "@/lib/admin-auth";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  await dbConnect();
  const { id } = await params;

  const { newPassword } = await request.json();

  if (!newPassword || typeof newPassword !== "string" || newPassword.length < 6) {
    return NextResponse.json(
      { error: "Password must be at least 6 characters" },
      { status: 400 }
    );
  }

  const user = await User.findById(id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (!user.hashedPassword) {
    return NextResponse.json(
      { error: "Cannot reset password for OAuth-only accounts" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);
  await User.findByIdAndUpdate(id, { hashedPassword });

  return NextResponse.json({ message: "Password reset successfully" });
}
