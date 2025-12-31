const OpenAI = require("openai");
require("dotenv").config({ path: "../.env" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function rewriteArticle(original, references) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is missing. Check your .env file.");
  }

  const prompt = `
Hey! I have an article that needs improvement.

Please rewrite it so it sounds natural, clear, engaging, and professional.
Keep the original meaning the same, but improve readability and flow.

Use the following reference articles only for writing style and structure:
${references.join("\n\n")}

Here is the original article:
${original}

After rewriting, add a small "References" section at the end if applicable.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 2000,
  });

  return response.choices[0].message.content;
}

module.exports = rewriteArticle;
