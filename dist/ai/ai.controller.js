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
const tests_service_1 = require("../test/tests.service");
const mongoose_1 = require("mongoose");
let AiController = class AiController {
    constructor(aiService, questionsService, boardsService, classesService, subjectsService, chaptersService, testsService) {
        this.aiService = aiService;
        this.questionsService = questionsService;
        this.boardsService = boardsService;
        this.classesService = classesService;
        this.subjectsService = subjectsService;
        this.chaptersService = chaptersService;
        this.testsService = testsService;
    }
    async generate(body) {
        const { boardId, classId, subjectId, chapterId, language } = body;
        if (!boardId || !classId || !subjectId || !chapterId || !language) {
            throw new common_1.BadRequestException("All IDs are required");
        }
        const boardObjectId = new mongoose_1.Types.ObjectId(boardId);
        const classObjectId = new mongoose_1.Types.ObjectId(classId);
        const subjectObjectId = new mongoose_1.Types.ObjectId(subjectId);
        const chapterObjectId = new mongoose_1.Types.ObjectId(chapterId);
        console.log("chapterObjectId:", chapterObjectId);
        const board = await this.boardsService.findById(boardId);
        const cls = await this.classesService.findById(classId);
        const subject = await this.subjectsService.findById(subjectId);
        const chapter = await this.chaptersService.findById(chapterId);
        if (!board || !cls || !subject || !chapter) {
            throw new common_1.BadRequestException("Invalid board/class/subject/chapter");
        }
        let test = await this.testsService.findOne({
            boardId: boardObjectId,
            classId: classObjectId,
            subjectId: subjectObjectId,
            chapterId: chapterObjectId,
            language,
        });
        if (test) {
            const existingQuestions = await this.questionsService.getByTest(test._id.toString());
            console.log("Existing Questions:", existingQuestions.length);
            if (existingQuestions.length > 0) {
                return {
                    success: true,
                    fromCache: true,
                    testId: test._id.toString(),
                    count: existingQuestions.length,
                    data: existingQuestions,
                };
            }
            console.log("Empty questions → calling AI");
        }
        if (!test) {
            test = await this.testsService.create({
                boardId: boardObjectId,
                classId: classObjectId,
                subjectId: subjectObjectId,
                chapterId: chapterObjectId,
                language,
            });
        }
        let questions;
        try {
            questions = await this.aiService.generateMCQ(board.name, cls.name, subject.name, chapter.name, language);
        }
        catch (err) {
            console.error("AI ERROR:", err);
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
            boardId: boardObjectId,
            classId: classObjectId,
            subjectId: subjectObjectId,
            chapterId: chapterObjectId,
            testId: test._id,
            language,
        }));
        const saved = await this.questionsService.saveMany(formatted);
        return {
            success: true,
            fromCache: false,
            testId: test._id.toString(),
            count: saved.length,
            data: saved,
        };
    }
    async debugTest(testId) {
        return this.questionsService.getByTest(testId);
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
__decorate([
    (0, common_1.Post)("debug-test"),
    __param(0, (0, common_1.Body)("testId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "debugTest", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)("ai"),
    __metadata("design:paramtypes", [ai_service_1.AiService,
        questions_service_1.QuestionsService,
        boards_service_1.BoardsService,
        classes_service_1.ClassesService,
        subjects_service_1.SubjectsService,
        chapters_service_1.ChaptersService,
        tests_service_1.TestsService])
], AiController);
//# sourceMappingURL=ai.controller.js.map