import { OpenAI } from "openai";
import dotenv from 'dotenv';
dotenv.config();

const client = new OpenAI({
	baseURL: "https://router.huggingface.co/v1",
	apiKey: process.env.HF_TOKEN,
});

const question = "Where is Cairo?";

// Configuration variables
const model = "Qwen/Qwen2.5-1.5B-Instruct:featherless-ai";
const messages = [
    {
        role: "user",
        content: question,
    },
];

console.log("📡 Making API request to model:", model);
console.log("💭 User message:", messages[0].content);

try {
    const chatCompletion = await client.chat.completions.create({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 150,
        top_p: 0.9,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stream: false
    });

    console.log("✅ API request successful!");
    console.log("📊 Response metadata:");
    console.log("  - Model used:", chatCompletion.model);
    console.log("  - Created at:", new Date(chatCompletion.created * 1000).toISOString());
    console.log("  - Usage tokens:", chatCompletion.usage);
    console.log("  - Finish reason:", chatCompletion.choices[0].finish_reason);
    
    console.log("\n💬 Assistant response:");
    console.log(chatCompletion.choices[0].message);
    
} catch (error) {
    console.error("❌ API request failed:");
    console.error("  - Error type:", error.constructor.name);
    console.error("  - Status code:", error.status);
    console.error("  - Error message:", error.message);
    console.error("  - Full error:", error);
}