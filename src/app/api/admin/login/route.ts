import { NextResponse } from "next/server";

const ADMIN_EMAILS = ["mnkzecru@gmail.com"];

export async function POST(request: Request) {
  try {
    const { email, secret } = await request.json();

    console.log("[admin-login] email:", email, "| ADMIN_SECRET set:", !!process.env.ADMIN_SECRET, "| secret match:", secret === process.env.ADMIN_SECRET);

    if (!email || !ADMIN_EMAILS.includes(email.toLowerCase().trim())) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (!secret || secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ token: process.env.ADMIN_SECRET });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
