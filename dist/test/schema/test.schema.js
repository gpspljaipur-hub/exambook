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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSchema = exports.Test = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Test = class Test {
};
exports.Test = Test;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Board", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Test.prototype, "boardId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "ClassModel", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Test.prototype, "classId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Subject", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Test.prototype, "subjectId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Chapter", required: true, unique: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Test.prototype, "chapterId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Test.prototype, "language", void 0);
exports.Test = Test = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Test);
exports.TestSchema = mongoose_1.SchemaFactory.createForClass(Test);
//# sourceMappingURL=test.schema.js.map