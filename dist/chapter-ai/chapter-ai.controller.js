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
exports.ChapterAiController = void 0;
const common_1 = require("@nestjs/common");
const chapter_ai_service_1 = require("./chapter-ai.service");
const chapter_ai_dto_1 = require("./dto/chapter-ai.dto");
let ChapterAiController = class ChapterAiController {
    constructor(service) {
        this.service = service;
    }
    generate(dto) {
        return this.service.generateByIds(dto);
    }
};
exports.ChapterAiController = ChapterAiController;
__decorate([
    (0, common_1.Post)("generate"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chapter_ai_dto_1.ChapterByIdDto]),
    __metadata("design:returntype", void 0)
], ChapterAiController.prototype, "generate", null);
exports.ChapterAiController = ChapterAiController = __decorate([
    (0, common_1.Controller)("chapter-ai"),
    __metadata("design:paramtypes", [chapter_ai_service_1.ChapterAiService])
], ChapterAiController);
//# sourceMappingURL=chapter-ai.controller.js.map