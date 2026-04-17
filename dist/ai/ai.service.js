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
        this.API_KEY = "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";
    }
    async generateMCQ(board, cls, subject) {
        const prompt = `
Generate 20 MCQ questions.

Board: ${board}
Class: ${cls}
Subject: ${subject}

Return ONLY JSON:
[
  {
    "question": "...",
    "options": ["A","B","C","D"],
    "correctAnswer": "A",
    "explanation": "..."
  }
]
`;
        try {
            const response = await axios_1.default.post("https://api.groq.com/openai/v1/chat/completions", {
                model: "llama-3.3-70b-versatile",
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
            text = text.replace(/```json|```/g, "");
            return JSON.parse(text);
        }
        catch (error) {
            console.error(error?.response?.data || error);
            throw error;
        }
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)()
], AiService);
//# sourceMappingURL=ai.service.js.map