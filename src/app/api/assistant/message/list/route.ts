import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { threadId } = await req.json();
  console.log({ threadId });

  if (!threadId) {
    return NextResponse.json(
      { error: "thread Id and message are required!", success: false },
      { status: 400 }
    );
  }

  const openAi = new OpenAI();
  try {
    const threadMessages = await openAi.beta.threads.messages.list(threadId);
    return NextResponse.json(
      { threadMessages, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
