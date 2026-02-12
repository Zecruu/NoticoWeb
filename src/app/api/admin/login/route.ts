import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

const ADMIN_EMAILS = ["mnkzecru@gmail.com"];

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    if (!ADMIN_EMAILS.includes(email.toLowerCase().trim())) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    await dbConnect();

    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user || !user.hashedPassword) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ token: user._id.toString() });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
