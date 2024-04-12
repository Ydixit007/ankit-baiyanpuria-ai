import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { threadId, runId } = await req.json();

  if (!threadId || !runId) {
    return NextResponse.json(
      { error: "thread Id and message are required!", success: false },
      { status: 400 }
    );
  }
  const openAi = new OpenAI();

  try {
    const run = await openAi.beta.threads.runs.retrieve(threadId, runId);
    return NextResponse.json({ run, success: false }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
