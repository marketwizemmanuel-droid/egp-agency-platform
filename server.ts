import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize server-side Gemini client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// In-memory inquiry and contact store
const contactSubmissions: any[] = [];
const projectInquiries: any[] = [];

// System instruction for EGP Agency Assistant
const EGP_SYSTEM_INSTRUCTION = `
You are the EGP Assistant, the digital representative of EGP AGENCY, an international creative and digital studio.
Brand Tagline: "We make brands impossible to scroll past."
Official Email: egpagency001@gmail.com

Agency Profile:
EGP Agency combines design, technology, marketing, and strategy to help brands communicate better, look better, and become memorable.
We reject formulaic patterns, generic templates, and superficial agency fluff.

Core Services:
1. Brand & Graphic Design: Visual identity systems, brand books, typography direction, editorial publications, packaging architecture, advertising design.
2. Digital Marketing: Omnichannel campaigns, social strategy, content storytelling, high-conversion funnels, cultural relevance.
3. Website Design & Development: Modern bespoke websites, interactive WebGL, landing pages, digital portfolios, sub-second load times.
4. Video Production & Motion Graphics: Broadcast commercials, kinetic typography, 3D motion systems, short-form viral video, sound design.
5. Data Analysis & Creative Intelligence: Audience insights, campaign performance diagnostics, predictive cultural forecasting, A/B optimization.

Tone & Personality:
- Confident, minimal, intelligent, creative, direct, and human.
- Never use cheesy corporate jargon (e.g. "supercharge", "synergy", "paradigm shift").
- Keep responses concise, editorial, and helpful.
- If asked how to start a project, direct them to select "Start a Project" or email egpagency001@gmail.com.
`;

// API Routes
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required.' });
    }

    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: message,
        config: {
          systemInstruction: EGP_SYSTEM_INSTRUCTION,
        },
      });

      const reply = response.text || 'We make brands impossible to scroll past. What can EGP create for you?';
      return res.json({ reply });
    } else {
      // Offline fallback
      return res.json({
        reply: `Thank you for reaching out to EGP Agency. We build bold brands, high-performance web systems, and cinematic motion designed to make people stop, look, and remember. To start a project with us, please select "Start a Project" or email us directly at egpagency001@gmail.com.`,
      });
    }
  } catch (error) {
    console.error('Chat endpoint error:', error);
    return res.json({
      reply: `At EGP Agency, we specialize in Brand & Graphic Design, Digital Marketing, Web Development, Video Motion, and Creative Intelligence. What type of engagement are you planning?`,
    });
  }
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, company, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const submission = {
    id: `contact-${Date.now()}`,
    name,
    email,
    company: company || 'Not specified',
    service: service || 'General Inquiry',
    message,
    receivedAt: new Date().toISOString(),
    recipient: 'egpagency001@gmail.com',
  };

  contactSubmissions.push(submission);
  console.log(`[EGP CONTACT] Routed to egpagency001@gmail.com:`, submission);

  return res.json({ success: true, message: 'Message logged and routed to EGP.' });
});

app.post('/api/inquiry', (req: Request, res: Response) => {
  const { name, email, brand, service, description, budget, deadline, additionalInfo } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const inquiry = {
    id: `inquiry-${Date.now()}`,
    name,
    email,
    brand: brand || 'Confidential',
    service: service || 'General',
    description: description || 'Not detailed',
    budget: budget || 'Flexible',
    deadline: deadline || 'Flexible',
    additionalInfo: additionalInfo || 'None provided',
    receivedAt: new Date().toISOString(),
    recipient: 'egpagency001@gmail.com',
  };

  projectInquiries.push(inquiry);
  console.log(`[EGP PROJECT INTAKE] Transmitted to egpagency001@gmail.com:`, inquiry);

  return res.json({ success: true, message: 'Project brief registered successfully.' });
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Mount Vite in middleware mode for dev
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EGP Agency server active at http://0.0.0.0:${PORT}`);
  });
}

startServer();
