import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Item from "@/models/Item";
import Folder from "@/models/Folder";
import SharedNote from "@/models/SharedNote";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  await dbConnect();
  const { id } = await params;

  const user = await User.findById(id).select("-hashedPassword").lean();
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  await dbConnect();
  const { id } = await params;

  const body = await request.json();
  const updates: Record<string, unknown> = {};

  if (body.tier === "free" || body.tier === "pro") {
    updates.tier = body.tier;
  }
  if (typeof body.name === "string" && body.name.trim()) {
    updates.name = body.name.trim();
  }
  if (typeof body.email === "string" && body.email.trim()) {
    updates.email = body.email.trim().toLowerCase();
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
  }

  const user = await User.findByIdAndUpdate(id, updates, { new: true })
    .select("-hashedPassword")
    .lean();

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  await dbConnect();
  const { id } = await params;

  const user = await User.findById(id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const userId = user._id.toString();

  await Promise.all([
    User.findByIdAndDelete(id),
    Item.deleteMany({ userId }),
    Folder.deleteMany({ userId }),
    SharedNote.deleteMany({ userId }),
  ]);

  return NextResponse.json({ message: "User deleted successfully" });
}
