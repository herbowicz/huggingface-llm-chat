# 🤖 LLM Chat Interface

A beautiful web interface for interacting with Large Language Models via Hugging Face's router API.

## ✨ Features

- **🎨 Beautiful UI**: Responsive web interface with gradient design
- **🔄 Multiple Models**: Support for various LLMs including Qwen, Llama, Mistral
- **⚙️ Parameter Control**: Adjust temperature, max tokens, top-p, and penalties
- **📊 Detailed Responses**: View metadata including token usage and model info
- **🚀 Real-time**: Live loading states and error handling
- **🔒 Secure**: Environment variables for API keys

## 🛠️ Models Supported

- Qwen/Qwen2.5-1.5B-Instruct:featherless-ai
- meta-llama/Meta-Llama-3-8B-Instruct
- microsoft/DialoGPT-medium
- mistralai/Mistral-7B-Instruct-v0.1
- HuggingFaceH4/zephyr-7b-beta

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Hugging Face API token

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/herbowicz/huggingface-llm-chat.git
   cd huggingface-llm-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   HF_TOKEN=your_hugging_face_token_here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── index.html          # Web interface
├── server.mjs          # Express server
├── my-llm.mjs         # Original CLI script
├── test-llm.mjs       # Test script
├── package.json       # Dependencies
├── .env              # Environment variables (create this)
└── .gitignore        # Git ignore rules
```

## 🎛️ Parameters

- **Temperature** (0-2): Controls randomness in responses  
  <sub>*Lower values (0.1-0.3) make responses more focused and predictable, higher values (0.7-1.0) make them more creative and varied*</sub>

- **Max Tokens** (1-2048): Maximum length of response  
  <sub>*Tokens are pieces of words - roughly 1 token ≈ 0.75 words, so 100 tokens ≈ 75 words*</sub>

- **Top P** (0-1): Nucleus sampling parameter  
  <sub>*Controls diversity by considering only the most likely words that make up the top P% probability mass*</sub>

- **Frequency Penalty** (-1 to 1): Reduces repetition  
  <sub>*Positive values discourage the model from repeating the same words/phrases it already used*</sub>

- **Presence Penalty** (-1 to 1): Encourages topic diversity  
  <sub>*Positive values encourage the model to talk about new topics rather than staying on the same subject*</sub>

### 💡 Recommended Settings for Beginners

- **General questions**: Temperature: 0.7, Max Tokens: 150, Top P: 0.9, Penalties: 0.0
- **Creative writing**: Temperature: 0.9, Max Tokens: 300, Top P: 0.9, Penalties: 0.0  
- **Factual answers**: Temperature: 0.3, Max Tokens: 100, Top P: 0.9, Penalties: 0.0
- **Detailed explanations**: Temperature: 0.5, Max Tokens: 500, Top P: 0.9, Penalties: 0.0

## 🔧 Configuration

### Getting a Hugging Face Token

1. Go to [Hugging Face Settings](https://huggingface.co/settings/tokens)
2. Create a new token with "Read" and "Inference" permissions
3. Copy the token to your `.env` file

### Environment Variables

```env
HF_TOKEN=hf_your_token_here    # Required: Your Hugging Face API token
PORT=3000                      # Optional: Server port (default: 3000)
```

## 🖥️ Usage

### Web Interface

1. Enter your question in the text area
2. Select a model from the dropdown
3. Adjust parameters if needed (defaults work well)
4. Click "Ask Question" and wait for the response

### CLI Usage

For direct API testing:
```bash
node my-llm.mjs
```

## 🛡️ Security

- API tokens are stored in environment variables
- `.env` file is excluded from git
- No sensitive data in client-side code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project however you'd like!

## 🔗 Links

- [Hugging Face](https://huggingface.co/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Express.js](https://expressjs.com/)

---

**Made with ❤️ by Grzegorz Herbowicz**
