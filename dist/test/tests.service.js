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
exports.TestsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const test_schema_1 = require("./schema/test.schema");
const mongoose_2 = require("mongoose");
let TestsService = class TestsService {
    constructor(testModel) {
        this.testModel = testModel;
    }
    async findExistingTest(filter) {
        return this.testModel.findOne({
            boardId: new mongoose_2.Types.ObjectId(filter.boardId),
            classId: new mongoose_2.Types.ObjectId(filter.classId),
            subjectId: new mongoose_2.Types.ObjectId(filter.subjectId),
            chapterId: new mongoose_2.Types.ObjectId(filter.chapterId),
            language: filter.language,
        });
    }
    async findOne(filter) {
        return this.testModel.findOne(filter);
    }
    async create(data) {
        return this.testModel.create(data);
    }
    async findById(id) {
        return this.testModel.findById(id);
    }
};
exports.TestsService = TestsService;
exports.TestsService = TestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(test_schema_1.Test.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TestsService);
//# sourceMappingURL=tests.service.js.map