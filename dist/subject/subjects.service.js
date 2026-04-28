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
exports.SubjectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const subject_schema_1 = require("./schema/subject.schema");
const mongoose_2 = require("mongoose");
const mongoose_3 = require("mongoose");
let SubjectsService = class SubjectsService {
    constructor(subjectModel) {
        this.subjectModel = subjectModel;
    }
    async addSubject(name, classId, boardId) {
        const classObjectId = new mongoose_3.Types.ObjectId(classId);
        const boardObjectId = new mongoose_3.Types.ObjectId(boardId);
        const exists = await this.subjectModel.findOne({
            name,
            classId: classObjectId,
            boardId: boardObjectId,
        });
        if (exists) {
            throw new common_1.BadRequestException("Subject already exists");
        }
        return this.subjectModel.create({
            name,
            classId: classObjectId,
            boardId: boardObjectId,
        });
    }
    async getSubjects(classId, boardId) {
        return this.subjectModel
            .find({
            classId: new mongoose_3.Types.ObjectId(classId),
            boardId: new mongoose_3.Types.ObjectId(boardId),
        })
            .populate({
            path: "classId",
            select: "name boardId",
            populate: {
                path: "boardId",
                select: "name",
            },
        })
            .populate({
            path: "boardId",
            select: "name",
        });
    }
    async findById(id) {
        return this.subjectModel.findById(id);
    }
};
exports.SubjectsService = SubjectsService;
exports.SubjectsService = SubjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(subject_schema_1.Subject.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubjectsService);
//# sourceMappingURL=subjects.service.js.map