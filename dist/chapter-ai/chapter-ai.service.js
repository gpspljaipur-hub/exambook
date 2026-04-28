"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapterAiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ChapterAiService = class ChapterAiService {
    constructor(chapterModel, contentModel) {
        this.chapterModel = chapterModel;
        this.contentModel = contentModel;
        this.API_KEY = process.env.GROQ_API_KEY ||
            "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";
    }
    async generateByIds(dto) {
        const { boardId, classId, subjectId, chapterId } = dto;
        try {
            const chapter = await this.chapterModel
                .findById(new mongoose_2.Types.ObjectId(chapterId))
                .populate({
                path: "subjectId",
                populate: {
                    path: "classId",
                    populate: {
                        path: "boardId",
                    },
                },
            });
            if (!chapter) {
                return { success: false, message: "Chapter not found" };
            }
            const chapterName = chapter.name;
            const subjectName = chapter.subjectId?.name;
            const className = chapter.subjectId?.classId?.name;
            const boardName = chapter.subjectId?.classId?.boardId?.name;
            if (!boardName || !className || !subjectName) {
                return {
                    success: false,
                    message: "Relation missing (board/class/subject)",
                };
            }
            const existing = await this.contentModel.findOne({
                chapterId: new mongoose_2.Types.ObjectId(chapterId),
            });
            if (existing) {
                return {
                    success: true,
                    source: "database",
                    data: existing,
                };
            }
            const prompt = `
You are an expert teacher.

Generate FULL study material in STRICT JSON format.

Do NOT return anything except JSON.

Format:
{
  "chapterName": "",
  "introduction": "",
  "theory": [
    { "topic": "", "content": "" }
  ],
  "formulas": [
    { "name": "", "formula": "" }
  ],
  "importantPoints": [],
  "examples": [
    { "question": "", "solution": "" }
  ],
  "mcqs": [
    { "question": "", "options": [], "answer": "" }
  ],
  "shortQuestions": [
    { "question": "", "answer": "" }
  ],
  "longQuestions": [
    { "question": "", "answer": "" }
  ],
  "revisionNotes": [],
  "difficulty": "",
  "estimatedTime": ""
}

Board: ${boardName}
Class: ${className}
Subject: ${subjectName}
Chapter: ${chapterName}
`;
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
            let aiText = response.data.choices[0].message.content;
            console.log("RAW AI RESPONSE:", aiText);
            aiText = aiText.replace(/```json|```/g, "").trim();
            let parsed;
            try {
                parsed = JSON.parse(aiText);
            }
            catch (e) {
                return {
                    success: false,
                    message: "AI returned invalid JSON",
                    raw: aiText,
                };
            }
            const saved = await this.contentModel.findOneAndUpdate({ chapterId: chapterId }, {
                boardId,
                classId,
                subjectId,
                chapterId,
                ...parsed,
            }, {
                upsert: true,
                returnDocument: "after",
            });
            return {
                success: true,
                source: "ai",
                data: saved,
            };
        }
        catch (error) {
            console.error("GROQ ERROR:", error);
            return {
                success: false,
                message: "AI generation failed",
            };
        }
    }
};
exports.ChapterAiService = ChapterAiService;
exports.ChapterAiService = ChapterAiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Chapter")),
    __param(1, (0, mongoose_1.InjectModel)("ChapterContent")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ChapterAiService);
//# sourceMappingURL=chapter-ai.service.js.map