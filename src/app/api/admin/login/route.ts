import { NextResponse } from "next/server";

const ADMIN_EMAILS = ["mnkzecru@gmail.com"];

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email || "";
    const secret = body.secret || "";

    const envSet = !!process.env.ADMIN_SECRET;
    const emailMatch = ADMIN_EMAILS.includes(email.toLowerCase().trim());
    const secretMatch = secret === process.env.ADMIN_SECRET;

    if (!emailMatch || !secretMatch) {
      return NextResponse.json(
        {
          error: "Invalid credentials",
          debug: { emailReceived: !!email, emailMatch, envSet, secretMatch },
        },
        { status: 401 }
      );
    }

    return NextResponse.json({ token: process.env.ADMIN_SECRET });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request", detail: String(err) },
      { status: 400 }
    );
  }
}
