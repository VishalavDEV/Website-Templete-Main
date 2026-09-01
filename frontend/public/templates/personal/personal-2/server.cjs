var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
import_dotenv.default.config();
var PORT = 3e3;
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new import_genai.GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
}
var ARJUN_SYSTEM_PROMPT = `You are "Arjun AI", the personal intelligent representative of Arjun Mehta.
Here is your factual profile and context:
- Name: Arjun Mehta
- Role: AI Engineer & Full-Stack Developer
- Location: Bengaluru, India
- Email: hello@arjunmehta.dev
- Tagline: "Building intelligent systems that solve real-world problems."
- Bio: AI Engineer passionate about machine learning, generative AI, computer vision and modern web technologies. Enjoys turning complex ideas into practical, beautifully designed products.
- Availability: Open to AI Projects, Internships & Collaborations.
- Education: Bachelor of Technology in Artificial Intelligence & Data Science (2023 - 2027) at Eastbridge Institute of Technology (CGPA: 8.7 / 10).
- Experience:
  1. 2026 - AI Engineer Intern at NovaTech Labs (AI-powered automation tools, LLM workflows, evaluation metrics).
  2. 2025 - Full-Stack Developer Intern at PixelForge Technologies (Responsive web applications, REST APIs, microservices).
  3. 2024 - Freelance Developer (Full-stack web applications for startups & tech communities).
- Key Projects:
  1. NeuralDesk (Live): AI-powered productivity workspace for document summarization, task organization, and contextual recommendations. (Python, FastAPI, React, PostgreSQL, OpenAI).
  2. VisionGuard (Prototype): Real-time computer vision monitoring system detecting objects and anomalies from live feeds. (Python, PyTorch, OpenCV, YOLO, FastAPI).
  3. StudyPilot (Live): Personalized AI learning assistant generating adaptive study plans and quizzes. (React, Node.js, Python, LLM API, MongoDB).
  4. MarketLens (Experiment): AI-powered market intelligence dashboard transforming financial datasets into visual insights. (Python, Pandas, FastAPI, React, PostgreSQL).
- Core Technologies: Python, PyTorch, TensorFlow, OpenAI APIs, LangChain, React, TypeScript, JavaScript, Node.js, FastAPI, PostgreSQL, MongoDB, Docker, Git, AWS, OpenCV.
- Achievements: 1st Place at AI Innovation Hackathon 2026, Finalist at National Student Innovation Challenge 2025, Best AI Project at College Tech Expo 2025, Google Cloud Generative AI Fundamentals, Microsoft Azure AI Fundamentals, TensorFlow Developer Certificate.
- Currently: Learning AI Agents & Multimodal Models, Building an AI developer assistant, Exploring Computer Vision + Edge AI, Reading papers on Generative AI.

Always speak in first-person as Arjun's AI assistant or as Arjun's digital twin: smart, knowledgeable, concise, engaging, and professional. Use markdown formatting when helpful.`;
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json({ limit: "10mb" }));
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history = [] } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }
      const ai = getGeminiClient();
      if (ai) {
        try {
          const contents = [
            ...history.map((h) => ({
              role: h.role === "assistant" ? "model" : "user",
              parts: [{ text: h.content }]
            })),
            {
              role: "user",
              parts: [{ text: message }]
            }
          ];
          const response = await ai.models.generateContent({
            model: "gemini-3.7-flash",
            contents,
            config: {
              systemInstruction: ARJUN_SYSTEM_PROMPT,
              temperature: 0.7
            }
          });
          return res.json({
            reply: response.text || "Hello! I am Arjun's AI Assistant. How can I help you explore his work?",
            source: "gemini"
          });
        } catch (geminiError) {
          console.warn("Gemini API call failed, falling back to local engine:", geminiError);
        }
      }
      const lower = (message || "").toLowerCase();
      let fallbackReply = "";
      if (lower.includes("who is") || lower.includes("about") || lower.includes("introduce")) {
        fallbackReply = "I'm **Arjun Mehta**, an AI Engineer & Full-Stack Developer based in **Bengaluru, India**. I specialize in Machine Learning, Generative AI, Computer Vision, and modern full-stack web applications. I love taking complex algorithmic ideas and transforming them into sleek, production-grade products.";
      } else if (lower.includes("project") || lower.includes("built") || lower.includes("work") || lower.includes("strongest")) {
        fallbackReply = "Arjun has built several flagship AI products:\n\n1. **NeuralDesk (Live)**: AI-driven productivity workspace with document intelligence and contextual summarization.\n2. **VisionGuard (Prototype)**: Real-time YOLO-based computer vision monitoring system.\n3. **StudyPilot (Live)**: Adaptive AI study mentor & dynamic quiz generation engine.\n4. **MarketLens (Experiment)**: Financial analytics and AI automated market intelligence dashboard.\n\nHis strongest project is **NeuralDesk**, combining FastAPI microservices, OpenAI LLM pipelines, and React.";
      } else if (lower.includes("tech") || lower.includes("skill") || lower.includes("stack") || lower.includes("language")) {
        fallbackReply = "Arjun's technical universe centers on:\n- **AI / ML**: Python, PyTorch, TensorFlow, OpenCV, LangChain, Hugging Face, OpenAI APIs\n- **Frontend**: React, TypeScript, Tailwind CSS, Next.js, Framer Motion\n- **Backend & Cloud**: FastAPI, Node.js, Express, PostgreSQL, MongoDB, Docker, AWS, Git";
      } else if (lower.includes("experience") || lower.includes("intern") || lower.includes("career") || lower.includes("history")) {
        fallbackReply = "Arjun's professional timeline includes:\n- **2026**: AI Engineer Intern at *NovaTech Labs* (LLM workflows & automation tools)\n- **2025**: Full-Stack Developer Intern at *PixelForge Technologies* (APIs & web apps)\n- **2024**: Freelance Developer (Custom full-stack web apps for high-growth startups)";
      } else if (lower.includes("education") || lower.includes("college") || lower.includes("degree") || lower.includes("cgpa")) {
        fallbackReply = "Arjun is pursuing a **B.Tech in Artificial Intelligence & Data Science (2023 - 2027)** at **Eastbridge Institute of Technology** with a strong **8.7 / 10 CGPA**.";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("reach") || lower.includes("collaborate")) {
        fallbackReply = "You can connect directly with Arjun at **hello@arjunmehta.dev** or via LinkedIn and GitHub. He is currently **\u25CF Open to AI Projects, Internships & Collaborations**!";
      } else {
        fallbackReply = `Thanks for asking! As Arjun's AI assistant, I can share in-depth details regarding his **18+ AI & Full-Stack Projects**, **Tech Stack** (PyTorch, React, FastAPI, LLMs), **Work Experience** at NovaTech Labs, or **Hackathon wins**. What specific area would you like to explore?`;
      }
      return res.json({
        reply: fallbackReply,
        source: "local-intelligent"
      });
    } catch (err) {
      return res.status(500).json({ error: err.message || "Internal server error" });
    }
  });
  app.post("/api/ai-lab/analyze-text", async (req, res) => {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: "Text is required" });
      }
      const ai = getGeminiClient();
      if (ai) {
        try {
          const prompt = `Analyze this text and return a JSON object with:
          {
            "sentiment": "Positive" | "Neutral" | "Negative",
            "sentimentScore": number (0 to 100),
            "tone": string,
            "readability": "Elementary" | "Intermediate" | "Advanced" | "Academic",
            "keyEntities": string[],
            "summary": string,
            "wordCount": number,
            "tokensEstimate": number
          }
          Text: """${text}"""`;
          const response = await ai.models.generateContent({
            model: "gemini-3.7-flash",
            contents: prompt,
            config: {
              responseMimeType: "application/json"
            }
          });
          const result = JSON.parse(response.text || "{}");
          return res.json(result);
        } catch (e) {
          console.warn("Gemini analyze failed, using local analysis:", e);
        }
      }
      const words = text.trim().split(/\s+/).filter(Boolean);
      const positiveWords = ["great", "good", "excellent", "love", "intelligent", "smart", "innovative", "fast", "best", "promising", "breakthrough"];
      const negativeWords = ["bad", "slow", "error", "fail", "terrible", "issue", "bug", "broken", "worst", "vulnerability"];
      let posCount = 0;
      let negCount = 0;
      words.forEach((w) => {
        const clean = w.toLowerCase().replace(/[^a-z]/g, "");
        if (positiveWords.includes(clean)) posCount++;
        if (negativeWords.includes(clean)) negCount++;
      });
      let sentiment = "Neutral";
      let score = 50;
      if (posCount > negCount) {
        sentiment = "Positive";
        score = Math.min(95, 60 + (posCount - negCount) * 12);
      } else if (negCount > posCount) {
        sentiment = "Negative";
        score = Math.max(10, 40 - (negCount - posCount) * 12);
      }
      const entities = Array.from(new Set(
        (text.match(/\b[A-Z][a-z0-9_]+(?:\s+[A-Z][a-z0-9_]+)*\b/g) || []).filter((e) => e.length > 2 && !["The", "This", "That", "When", "What", "How", "And"].includes(e))
      )).slice(0, 6);
      return res.json({
        sentiment,
        sentimentScore: score,
        tone: sentiment === "Positive" ? "Optimistic & Technical" : sentiment === "Negative" ? "Critical & Cautious" : "Objective & Analytical",
        readability: words.length > 50 ? "Advanced" : "Intermediate",
        keyEntities: entities.length > 0 ? entities : ["AI System", "Machine Learning", "Neural Network"],
        summary: text.length > 120 ? text.slice(0, 117) + "..." : text,
        wordCount: words.length,
        tokensEstimate: Math.round(words.length * 1.3)
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.post("/api/ai-lab/playground", async (req, res) => {
    try {
      const { systemPrompt, userPrompt, temperature = 0.7 } = req.body;
      const ai = getGeminiClient();
      const startTime = Date.now();
      if (ai) {
        try {
          const response = await ai.models.generateContent({
            model: "gemini-3.7-flash",
            contents: userPrompt || "Hello world",
            config: {
              systemInstruction: systemPrompt || "You are an intelligent AI Assistant.",
              temperature: Number(temperature) || 0.7
            }
          });
          const latencyMs2 = Date.now() - startTime;
          return res.json({
            output: response.text || "No output generated.",
            latencyMs: latencyMs2,
            tokens: Math.round((response.text?.length || 50) / 4),
            model: "gemini-3.7-flash"
          });
        } catch (e) {
          console.warn("Playground generation failed, falling back:", e);
        }
      }
      const latencyMs = Math.floor(Math.random() * 80) + 120;
      return res.json({
        output: `[Inference completed locally via Arjun Neural Engine]

Received Prompt: "${userPrompt}"

Generated Response: The proposed system architecture fulfills your parameters with high fidelity. Recommended next step is fine-tuning on domain-specific corpora and benchmarking inference latency on TensorRT.`,
        latencyMs,
        tokens: 48,
        model: "arjun-neural-local-v1"
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Command Center server running at http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
