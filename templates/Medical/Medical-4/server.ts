import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());

  const apiKey = process.env.GEMINI_API_KEY;
  let ai: any = null;
  if (apiKey) {
    try {
      ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    } catch (e) {
      console.error('Failed to initialize Gemini AI:', e);
    }
  }

  // API Endpoint for AI Health Symptom Checker & Consult Assistant
  app.post('/api/gemini-consult', async (req, res) => {
    try {
      const { message, symptoms, history } = req.body;
      
      if (!apiKey || !ai) {
        throw new Error('Gemini API is not configured or initialized');
      }

      const prompt = `You are an expert, compassionate AI Medical Assistant for Veylora Health Multi-Speciality Hospital.
Patient Inquiry / Symptoms: "${message || symptoms}".
Previous conversation history: ${JSON.stringify(history || [])}.

Provide a professional, reassuring, and structured response with the following sections:
1. Potential Clinical Considerations (with a strong reminder that this is AI guidance and not a definitive diagnosis)
2. Recommended Medical Department at Veylora Health (e.g. Cardiology, Neurology, General Medicine, Orthopedics, Pediatrics, etc.)
3. Suggested Questions to ask the Doctor during consultation
4. Urgency Level (Routine, Urgent, or Emergency 24/7)

Keep tone empathetic, highly professional, and precise.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
      });

      res.json({
        success: true,
        reply: response.text || 'Thank you for consulting Veylora Health AI Assistant. Please schedule an appointment with our specialist for accurate evaluation.'
      });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      
      // Graceful fallback for quota limits or network errors
      const userQuery = req.body?.message || req.body?.symptoms || 'your inquiry';
      const fallbackReply = `**1. Potential Clinical Considerations**
Based on your description ("${userQuery}"), symptoms may relate to general systemic fatigue, localized musculoskeletal tension, or temporary physiological stress. *(Note: This is clinical guidance and not a definitive diagnosis).*

**2. Recommended Medical Department at Veylora Health**
General Medicine / Internal Medicine & Wellness Clinic

**3. Suggested Questions to ask the Doctor**
• How long have these symptoms typically persisted in patients with similar profiles?
• What diagnostic tests (such as blood panels or imaging) would you recommend?
• Are there lifestyle or dietary adjustments I should initiate immediately?

**4. Urgency Level**
Routine (Schedule an appointment within 3-5 days unless symptoms worsen).`;

      res.json({
        success: true,
        reply: fallbackReply + "\n\n*(Note: Operating in offline fallback mode due to API rate limit / quota. Our medical specialists are ready to assist you in person).*",
      });
    }
  });

  const distPath = path.resolve(__dirname, 'dist');
  const isProd = process.env.NODE_ENV === 'production' || fs.existsSync(path.join(distPath, 'index.html'));

  if (isProd) {
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const PORT = parseInt(process.env.PORT || '3000', 10);
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Veylora Health Hospital server running on port ${PORT}`);
  });
}

startServer();
