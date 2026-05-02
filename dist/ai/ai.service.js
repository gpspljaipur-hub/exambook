"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let AiService = class AiService {
    constructor() {
        this.API_KEY = process.env.GROQ_API_KEY ||
            "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";
    }
    async generateMCQ(board, cls, subject, chapter, language) {
        let finalLanguage = "English";
        if (language) {
            const lang = language.toLowerCase();
            if (lang === "hindi")
                finalLanguage = "Hindi";
            else if (lang === "punjabi")
                finalLanguage = "Punjabi";
            else
                finalLanguage = "English";
        }
        if (subject.toLowerCase().includes("sanskrit")) {
            finalLanguage = "Sanskrit";
        }
        console.log("👉 FINAL LANGUAGE:", finalLanguage);
        const prompt = `
Generate 10 MCQ questions.

Board: ${board}
Class: ${cls}
Subject: ${subject}
Chapter: ${chapter}

Language: ${finalLanguage}

STRICT RULES:
- Use ONLY ${finalLanguage}
- Do NOT use any other language
- Do NOT use Punjabi unless language is Punjabi
- Do NOT mix languages
- If not in ${finalLanguage}, regenerate internally
- Use simple ${finalLanguage} words only
- correctAnswer must be A, B, C, or D

Return ONLY JSON:

[
  {
    "question": "...",
    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
    "correctAnswer": "A",
    "explanation": "..."
  }
]
`;
        try {
            const response = await axios_1.default.post("https://api.groq.com/openai/v1/chat/completions", {
                model: "llama-3.3-70b-versatile",
                temperature: 0.2,
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            }, {
                headers: {
                    Authorization: `Bearer ${this.API_KEY}`,
                    "Content-Type": "application/json",
                },
            });
            let text = response.data.choices[0].message.content;
            console.log("👉 RAW AI:", text);
            text = text.replace(/```json|```/g, "").trim();
            const parsed = JSON.parse(text);
            if (finalLanguage === "English") {
                const hasPunjabi = /[ਅ-੿]/.test(text);
                if (hasPunjabi) {
                    console.log("⚠️ Punjabi detected → retrying...");
                    return this.retry(prompt);
                }
            }
            return parsed;
        }
        catch (error) {
            console.log("⚠️ FIRST TRY FAILED → RETRY");
            return this.retry(prompt);
        }
    }
    async retry(prompt) {
        const retryPrompt = `
Previous response was invalid or wrong language.

${prompt}

IMPORTANT:
- STRICTLY follow language rules
- Return ONLY valid JSON
`;
        const response = await axios_1.default.post("https://api.groq.com/openai/v1/chat/completions", {
            model: "llama-3.3-70b-versatile",
            temperature: 0.1,
            messages: [{ role: "user", content: retryPrompt }],
        }, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
                "Content-Type": "application/json",
            },
        });
        let text = response.data.choices[0].message.content;
        text = text.replace(/```json|```/g, "").trim();
        return JSON.parse(text);
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)()
], AiService);
//# sourceMappingURL=ai.service.js.map