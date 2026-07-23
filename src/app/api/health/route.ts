import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      service: "DentalNTK Web Application",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      region: "ap-southeast-1"
    },
    { status: 200 }
  );
}
