import { NextResponse } from "next/server";

export function requireAdmin(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}
