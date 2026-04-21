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
exports.ChaptersController = void 0;
const common_1 = require("@nestjs/common");
const chapters_service_1 = require("./chapters.service");
let ChaptersController = class ChaptersController {
    constructor(chaptersService) {
        this.chaptersService = chaptersService;
    }
    addChapter(body) {
        return this.chaptersService.addChapter(body.name, body.subjectId, body.classId, body.boardId);
    }
    getChapters(body) {
        return this.chaptersService.getChapters(body.subjectId, body.classId, body.boardId);
    }
};
exports.ChaptersController = ChaptersController;
__decorate([
    (0, common_1.Post)("add-chapter"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChaptersController.prototype, "addChapter", null);
__decorate([
    (0, common_1.Post)("get-chapter"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChaptersController.prototype, "getChapters", null);
exports.ChaptersController = ChaptersController = __decorate([
    (0, common_1.Controller)("chapters"),
    __metadata("design:paramtypes", [chapters_service_1.ChaptersService])
], ChaptersController);
//# sourceMappingURL=chapters.controller.js.map