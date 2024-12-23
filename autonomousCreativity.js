const { OpenAI } = require("openai");

require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: openaiApiKey
});

exports.generateCreativeIdeas = async (prompt) => {
  const baseResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are an AGI system capable of generating groundbreaking ideas." },
      { role: "user", content: `Create a groundbreaking idea for: "${prompt}".` }
    ],
    max_tokens: 200,
  });

  const refinementResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are an AGI system capable of refining and expanding ideas." },
      { role: "user", content: `Refine and expand upon the following idea: "${baseResponse.choices[0].message.content.trim()}".` }
    ],
    max_tokens: 200,
  });

  return {
    baseIdea: baseResponse.choices[0].message.content.trim(),
    refinedIdea: refinementResponse.choices[0].message.content.trim(),
  };
};