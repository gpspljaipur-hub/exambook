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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const questions_service_1 = require("../questions/questions.service");
const classes_service_1 = require("../classes/classes.service");
const boards_service_1 = require("../board/boards.service");
const subjects_service_1 = require("../subject/subjects.service");
const chapters_service_1 = require("../chapter/chapters.service");
let AiController = class AiController {
    constructor(aiService, questionsService, boardsService, classesService, subjectsService, chaptersService) {
        this.aiService = aiService;
        this.questionsService = questionsService;
        this.boardsService = boardsService;
        this.classesService = classesService;
        this.subjectsService = subjectsService;
        this.chaptersService = chaptersService;
    }
    async generate(body) {
        const { boardId, classId, subjectId, chapterId, language } = body;
        if (!boardId || !classId || !subjectId || !chapterId || !language) {
            throw new common_1.BadRequestException("All IDs are required");
        }
        const board = await this.boardsService.findById(boardId);
        const cls = await this.classesService.findById(classId);
        const subject = await this.subjectsService.findById(subjectId);
        const chapter = await this.chaptersService.findById(chapterId);
        if (!board || !cls || !subject || !chapter) {
            throw new common_1.BadRequestException("Invalid board/class/subject/chapter");
        }
        let questions;
        try {
            questions = await this.aiService.generateMCQ(board.name, cls.name, subject.name, chapter.name, language);
        }
        catch (err) {
            throw new common_1.BadRequestException("AI generation failed");
        }
        if (!Array.isArray(questions)) {
            throw new common_1.BadRequestException("Invalid AI response format");
        }
        const formatted = questions.map((q) => ({
            question: q.question,
            options: Array.isArray(q.options) ? q.options : [q.options],
            correctAnswer: Array.isArray(q.correctAnswer)
                ? q.correctAnswer[0]
                : q.correctAnswer,
            explanation: q.explanation || "",
            boardId,
            classId,
            subjectId,
        }));
        const saved = await this.questionsService.saveMany(formatted);
        return {
            success: true,
            count: saved.length,
            data: saved,
        };
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Post)("generate-questions"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generate", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)("ai"),
    __metadata("design:paramtypes", [ai_service_1.AiService,
        questions_service_1.QuestionsService,
        boards_service_1.BoardsService,
        classes_service_1.ClassesService,
        subjects_service_1.SubjectsService,
        chapters_service_1.ChaptersService])
], AiController);
//# sourceMappingURL=ai.controller.js.map