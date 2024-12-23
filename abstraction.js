const { OpenAI } = require("openai");

require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: openaiApiKey
});

exports.abstract = async (problem) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are an AGI system capable of abstract problem solving." },
      { role: "user", content: `Solve this problem abstractly: "${problem}". Provide reasoning steps.` }
    ],
    max_tokens: 200,
  });

  return {
    solution: response.choices[0].message.content.trim(),
    reasoning: "Generalized knowledge applied to solve an unfamiliar problem.",
  };
};
