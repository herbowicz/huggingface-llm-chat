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
- **Max Tokens** (1-2048): Maximum length of response
- **Top P** (0-1): Nucleus sampling parameter
- **Frequency Penalty** (-2 to 2): Reduces repetition
- **Presence Penalty** (-2 to 2): Encourages topic diversity

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
