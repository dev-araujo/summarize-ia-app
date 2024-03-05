const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require("../config");

const genAI = new GoogleGenerativeAI(config.API_KEY);

async function generateSummary(userPrompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prefix =
    "Resuma esse texto visando seus pontos mais importantes e levando consideração que ele será utilizado como material de revisão: ";
  const prompt = `${prefix}${userPrompt}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

module.exports = { generateSummary };
