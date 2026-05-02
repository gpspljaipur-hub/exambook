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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const axios_1 = __importDefault(require("axios"));
const chat_schema_1 = require("./schema/chat.schema");
let ChatService = class ChatService {
    constructor(chatModel) {
        this.chatModel = chatModel;
        this.API_KEY = process.env.GROQ_API_KEY ||
            "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";
    }
    async askQuestion(question, userId) {
        if (!question || !userId) {
            throw new common_1.BadRequestException("question and userId required");
        }
        const response = await axios_1.default.post("https://api.groq.com/openai/v1/chat/completions", {
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: question,
                },
            ],
        }, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`,
                "Content-Type": "application/json",
            },
        });
        console.log(response, "responseresponseresponse");
        const answer = response.data?.choices?.[0]?.message?.content || "No answer";
        await this.chatModel.create({
            question,
            answer,
            userId,
        });
        return { answer };
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chat_schema_1.Chat.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChatService);
//# sourceMappingURL=chat.service.js.map