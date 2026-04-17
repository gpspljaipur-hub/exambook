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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const board_schema_1 = require("./schema/board.schema");
const mongoose_2 = require("mongoose");
let BoardsService = class BoardsService {
    constructor(boardModel) {
        this.boardModel = boardModel;
    }
    async addBoard(name, description) {
        const exists = await this.boardModel.findOne({ name });
        if (exists) {
            throw new common_1.BadRequestException("Board already exists");
        }
        return this.boardModel.create({ name, description });
    }
    async getBoards() {
        return this.boardModel.find();
    }
    async findById(id) {
        return this.boardModel.findById(id);
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(board_schema_1.Board.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BoardsService);
//# sourceMappingURL=boards.service.js.map