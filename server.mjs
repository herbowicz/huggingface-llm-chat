import express from 'express';
import { OpenAI } from "openai";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// OpenAI client
const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_TOKEN,
});

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
    try {
        console.log('🚀 Received chat request:', req.body);
        
        const { 
            question, 
            model, 
            temperature, 
            max_tokens, 
            top_p, 
            frequency_penalty, 
            presence_penalty 
        } = req.body;

        const messages = [
            {
                role: "user",
                content: question,
            },
        ];

        console.log(`📡 Making API request to model: ${model}`);
        console.log(`💭 User message: ${question}`);

        const chatCompletion = await client.chat.completions.create({
            model,
            messages,
            temperature,
            max_tokens,
            top_p,
            frequency_penalty,
            presence_penalty,
            stream: false
        });

        console.log('✅ API request successful!');
        console.log('📊 Response metadata:', {
            model: chatCompletion.model,
            created: chatCompletion.created,
            usage: chatCompletion.usage,
            finish_reason: chatCompletion.choices[0].finish_reason
        });

        // Send response back to frontend
        res.json({
            model: chatCompletion.model,
            created: chatCompletion.created,
            usage: chatCompletion.usage,
            finish_reason: chatCompletion.choices[0].finish_reason,
            content: chatCompletion.choices[0].message.content
        });

    } catch (error) {
        console.error('❌ API request failed:', error);
        res.status(500).json({
            error: error.message,
            type: error.constructor.name,
            status: error.status
        });
    }
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`🌐 Server running at http://localhost:${port}`);
    console.log(`✅ Environment loaded. HF_TOKEN present: ${!!process.env.HF_TOKEN}`);
    console.log(`🚀 Open your browser and go to http://localhost:${port}`);
});
