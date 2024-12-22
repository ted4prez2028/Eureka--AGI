// File: abstraction.js
const { OpenAI } = require("openai"); // Updated OpenAI import

require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;
// Initialize OpenAI with your API key

const openai = new OpenAI({
    apiKey: openaiApiKey
  });

exports.abstract = async (problem) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Solve this problem abstractly: "${problem}". Provide reasoning steps.`,
    max_tokens: 200,
  });

  return {
    solution: response.data.choices[0].text.trim(),
    reasoning: "Generalized knowledge applied to solve an unfamiliar problem.",
  };
};
