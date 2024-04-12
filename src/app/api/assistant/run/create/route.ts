import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { threadId, assistantId } = await req.json();
  if (!threadId || !assistantId) {
    return NextResponse.json(
      { error: "threadId and assistantId are required!", success: false },
      { status: 400 }
    );
  }

  const openai = new OpenAI();
  try {
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });
    return NextResponse.json({ run, success: false }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
