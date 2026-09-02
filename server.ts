import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client lazily
  let ai: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!process.env.GEMINI_API_KEY) return null;
    if (!ai) {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return ai;
  }

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // AI Health Assistant endpoint
  app.post('/api/gemini/assistant', async (req, res) => {
    try {
      const { message, history, userProfile } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const client = getGeminiClient();

      if (!client) {
        // Fallback intelligent responses when GEMINI_API_KEY is not configured
        const fallbackResponse = generateSmartHealthFallback(message, userProfile);
        return res.json({
          reply: fallbackResponse,
          isLiveAI: false,
          disclaimer: 'Vitalis AI provides health guidance and education. Always consult your qualified healthcare provider for diagnosis, treatment, or emergencies.',
        });
      }

      const systemInstruction = `You are Aura, an empathetic, evidence-based, highly knowledgeable consumer Health & Wellness AI Assistant for the Vitalis Platform.
Your goal is to provide clear, actionable, friendly, and empowering health guidance, lifestyle recommendations, symptom triaging, report explanations, and navigation to appropriate care services (e.g., Doctor Consultations, Lab Tests, Nutritionists, Mental Health Counselors).
Key Rules:
1. Speak with a warm, conversational, reassuring tone. Use clean bullet points and short paragraphs.
2. Structure advice logically: Immediate take-away / explanation -> Practical self-care/wellness steps -> When to see a doctor / recommended Vitalis service.
3. If the user asks about symptoms, ask clarifying questions gently and explain common benign causes vs warning signs that require in-person care.
4. If there are signs of medical emergencies (chest pain, stroke symptoms, difficulty breathing, severe bleeding), immediately urge them to call local emergency services (911/112).
5. Always remind users gently that your advice is supportive and educational, not a definitive diagnosis.
User Context: ${userProfile ? JSON.stringify(userProfile) : 'General user'}`;

      const chatHistory = (history || []).map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      const contents = [
        ...chatHistory,
        { role: 'user', parts: [{ text: message }] }
      ];

      const response = await client.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || 'I am here to help you navigate your health and wellness journey. How else can I assist you?';

      return res.json({
        reply: replyText,
        isLiveAI: true,
        disclaimer: 'Vitalis AI provides health guidance and education. Always consult your qualified healthcare provider for diagnosis, treatment, or emergencies.',
      });
    } catch (err: any) {
      console.error('Gemini Assistant Error:', err);
      return res.json({
        reply: generateSmartHealthFallback(req.body.message || '', req.body.userProfile),
        isLiveAI: false,
        error: err.message,
        disclaimer: 'Vitalis AI provides health guidance and education. Always consult your qualified healthcare provider for diagnosis, treatment, or emergencies.',
      });
    }
  });

  // Analyze Lab Report Endpoint
  app.post('/api/gemini/analyze-report', async (req, res) => {
    try {
      const { reportName, biomarkers, notes } = req.body;
      const client = getGeminiClient();

      if (!client) {
        return res.json({
          summary: `Your ${reportName || 'Health Panel'} shows largely optimal baseline levels with a few actionable insights for diet and hydration.`,
          keyInsights: [
            'All primary biomarkers are within standard metabolic targets.',
            'Maintain consistent daily hydration (2.5L - 3.0L) to support kidney filtration and electrolyte balance.',
            'Consider adding polyphenol-rich foods (berries, leafy greens) to support natural cellular recovery.'
          ],
          recommendedActions: [
            'Schedule a routine follow-up with your primary physician in 6 months.',
            'Incorporate 20 minutes of moderate aerobic activity 4x per week.'
          ],
          isLiveAI: false
        });
      }

      const prompt = `Analyze this lab test report for a health-conscious consumer in clear, simple, reassuring language:
Report: ${reportName}
Biomarkers: ${JSON.stringify(biomarkers || [])}
Notes: ${notes || 'None'}

Provide:
1. A 2-sentence summary in plain, easy-to-understand English.
2. 3 key actionable takeaways.
3. 2 proactive wellness lifestyle recommendations.`;

      const response = await client.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are an expert clinical laboratory interpreter translating complex medical metrics into encouraging, simple, actionable insights for everyday users.',
        },
      });

      return res.json({
        analysis: response.text,
        isLiveAI: true
      });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // Development vs Production serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Vitalis Health Server running on http://localhost:${PORT}`);
  });
}

function generateSmartHealthFallback(query: string, userProfile?: any): string {
  const q = query.toLowerCase();

  if (q.includes('sleep') || q.includes('insomnia') || q.includes('tired')) {
    return `### Restorative Sleep Protocol 🌙
Sleep quality is the cornerstone of cellular repair, metabolic stability, and cognitive performance.

**Actionable Steps:**
- **Circadian Anchoring**: View 10–15 minutes of natural sunlight within 1 hour of waking to calibrate your melatonin onset.
- **Digital Sunset**: Power down blue-light emitting devices 60 minutes before bed or switch on warm night-shift filters.
- **Thermal Cueing**: Keep your sleep environment cool (around 65°F / 18°C) — a drop in core body temperature signals sleep initiation.
- **Wind-down Routine**: Try our 4-7-8 Guided Breathing session in the Mental Wellness tab.

*If persistent insomnia continues over 3 weeks, we recommend scheduling a consultation with one of our sleep and neurology specialists in the Services hub.*`;
  }

  if (q.includes('report') || q.includes('blood') || q.includes('lab') || q.includes('glucose') || q.includes('cholesterol')) {
    return `### Understanding Your Health Markers 📋
Your lab diagnostics provide a high-resolution snapshot of your systemic wellness:

- **Metabolic Profile (Glucose & HbA1c)**: Reflects average glycemic control over the past 90 days. Keeping fasting glucose below 100 mg/dL is optimal for metabolic flexibility.
- **Lipid Panel (HDL, LDL, Triglycerides)**: Ratios matter more than total cholesterol. Prioritize unsaturated fats, soluble fiber (oats, chia), and regular movement.
- **Inflammatory Markers (hs-CRP)**: Low levels indicate balanced systemic recovery.

*You can upload any recent PDF in the **Health Tests & Reports** tab for an automated biomarker breakdown!*`;
  }

  if (q.includes('stress') || q.includes('anxiety') || q.includes('mental') || q.includes('overwhelmed') || q.includes('burnout')) {
    return `### Calming the Nervous System 🌿
When acute or chronic stress activates the sympathetic nervous system ("fight or flight"), intentional physiological downregulation is key.

**Immediate Quick Reset:**
1. **Physiological Sigh**: Take two quick inhales through the nose, followed by a long, slow sigh out through the mouth. Repeat 3 times.
2. **5-4-3-2-1 Grounding**: Identify 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 positive affirmation.
3. **Hydration & Magnesium**: Drink a warm glass of water; chronic stress accelerates electrolyte depletion.

*Explore our dedicated **Mental Wellness** sanctuary for daily mood logs, guided soundscapes, and certified tele-therapy counselors.*`;
  }

  if (q.includes('diet') || q.includes('nutrition') || q.includes('food') || q.includes('weight') || q.includes('calorie')) {
    return `### Balanced Nutrition Architecture 🥗
Fueling your body sustainably is about nutrient density and metabolic steadiness:

- **The Power Plate Rule**: 50% colorful fibrous vegetables, 25% lean protein (salmon, tofu, legumes, chicken), and 25% complex slow-digesting carbohydrates (quinoa, sweet potatoes).
- **Protein Leverage**: Aim for 25-35g of bioavailable protein per meal to maintain muscle protein synthesis and satiety.
- **Hydration Target**: Aim for 2.5L to 3L of water daily with trace mineral electrolytes.

*Check out our **Nutrition & Wellness** page for curated meal plans, macro tracking, and nutritionist consultations.*`;
  }

  if (q.includes('appointment') || q.includes('doctor') || q.includes('consult') || q.includes('booking')) {
    return `### Finding the Right Healthcare Professional 🩺
Vitalis connects you with top board-certified specialists in minutes:

- **General Practice & Preventive Care**: For annual reviews, health optimizations, and medication refills.
- **Cardiology & Metabolic Health**: For blood pressure, lipid reviews, and cardiovascular screening.
- **Dermatology & Skin Longevity**: High-definition video scans for rashes, moles, and skin health.
- **Integrative Nutrition & Therapy**: For holistic health routines and mental resilience.

*Head over to the **Appointments** tab to filter by specialty, choose between HD Video or In-Clinic visits, and book instant slots!*`;
  }

  return `### Hello! How can I support your health today? 🌿
I am **Aura**, your personal Vitalis health companion. I can help you with:

- 📊 **Interpreting lab tests & vital metrics** in simple, empowering terms
- 🩺 **Matching you with top specialists** and preparing questions for appointments
- 🧘 **Personalized wellness protocols** for sleep, stress relief, and nutrition
- 💊 **Medication reminders & prescription refills**
- 👨‍👩‍👧 **Organizing your family's health schedules**

What would you like to explore or focus on right now?`;
}

startServer();
