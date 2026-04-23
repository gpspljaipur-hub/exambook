"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapterAiModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const chapter_ai_controller_1 = require("./chapter-ai.controller");
const chapter_ai_service_1 = require("./chapter-ai.service");
const chapter_schema_1 = require("./schemas/chapter.schema");
const board_schema_1 = require("../board/schema/board.schema");
const class_schema_1 = require("../classes/schema/class.schema");
const subject_schema_1 = require("../subject/schema/subject.schema");
const chapter_schema_2 = require("../chapter/schema/chapter.schema");
let ChapterAiModule = class ChapterAiModule {
};
exports.ChapterAiModule = ChapterAiModule;
exports.ChapterAiModule = ChapterAiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: "ChapterContent", schema: chapter_schema_1.ChapterContentSchema },
                { name: "Board", schema: board_schema_1.BoardSchema },
                { name: "Class", schema: class_schema_1.ClassSchema },
                { name: "Subject", schema: subject_schema_1.SubjectSchema },
                { name: "Chapter", schema: chapter_schema_2.ChapterSchema },
            ]),
        ],
        controllers: [chapter_ai_controller_1.ChapterAiController],
        providers: [chapter_ai_service_1.ChapterAiService],
    })
], ChapterAiModule);
//# sourceMappingURL=chapter-ai.module.js.map