// File: autonomousCreativity.js
const { OpenAI } = require("openai"); // Updated OpenAI import

require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;
// Initialize OpenAI with your API key

const openai = new OpenAI({
    apiKey: openaiApiKey
  });

exports.generateCreativeIdeas = async (prompt) => {
  const baseResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a groundbreaking idea for: "${prompt}".`,
    max_tokens: 200,
  });

  const refinementResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Refine and expand upon the following idea: "${baseResponse.data.choices[0].text.trim()}".`,
    max_tokens: 200,
  });

  return {
    baseIdea: baseResponse.data.choices[0].text.trim(),
    refinedIdea: refinementResponse.data.choices[0].text.trim(),
  };
};
