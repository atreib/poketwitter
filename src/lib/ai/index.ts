import OpenAI from "openai";

const openai = new OpenAI();

export async function translate(message: string, character: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `Take the following post and rewrite it as if ${character} from the anime Pokemon were saying it.`,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });
  return completion.choices.at(0)?.message.content;
}
