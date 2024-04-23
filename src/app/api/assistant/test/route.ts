import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export function POST() {
  dbConnect();
  return NextResponse.json(
    { message: "The api is working!", success: true },
    { status: 200 }
  );
}
