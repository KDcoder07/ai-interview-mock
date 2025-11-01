import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

async function list() {
  const genAI = new GoogleGenerativeAI(apiKey);
  const models = await genAI.listModels();
  console.log("Available models:\n");
  for (const m of models) {
    console.log("-", m.name);
  }
}

list();
