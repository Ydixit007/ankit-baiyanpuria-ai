import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { message, threadId } = await req.json();

  if (!threadId || !message) {
    return NextResponse.json(
      { error: "thread Id and message are required!", success: false },
      { status: 400 }
    );
  }

  const openAi = new OpenAI();
  try {
    const threadMessage = await openAi.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    });
    return NextResponse.json({ message: threadMessage, success: true}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
