import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // 1. Pull the country code header provided automatically by Vercel's edge network
    const countryCode = request.headers.get("x-vercel-ip-country") || "US";

    // 2. Return a native Next.js Response object
    return NextResponse.json({ country_code: countryCode }, { status: 200 });
  } catch (error) {
    console.error("Geo API route breakdown:", error);
    return NextResponse.json({ country_code: "US" }, { status: 500 });
  }
}