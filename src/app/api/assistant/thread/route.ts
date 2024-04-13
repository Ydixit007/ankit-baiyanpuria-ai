import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST() {
  const openAi = new OpenAI();
  try {
    const thread = await openAi.beta.threads.create();
    return NextResponse.json({ thread }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
