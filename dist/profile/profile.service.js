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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const profile_schema_1 = require("./schema/profile.schema");
const mongoose_2 = require("mongoose");
let ProfileService = class ProfileService {
    constructor(profileModel) {
        this.profileModel = profileModel;
    }
    async createOrUpdateProfile(data) {
        const { fullName, email, mobile, boardId, classId, language } = data;
        if (!boardId || !classId || !language) {
            throw new common_1.BadRequestException("boardId, classId, language required");
        }
        if (mobile) {
            const existing = await this.profileModel.findOne({ mobile });
            if (existing) {
                return this.profileModel.findOneAndUpdate({ mobile }, {
                    fullName,
                    email,
                    boardId: new mongoose_2.Types.ObjectId(boardId),
                    classId: new mongoose_2.Types.ObjectId(classId),
                    language,
                }, { new: true });
            }
        }
        return this.profileModel.create({
            fullName,
            email,
            mobile,
            boardId: new mongoose_2.Types.ObjectId(boardId),
            classId: new mongoose_2.Types.ObjectId(classId),
            language,
        });
    }
    async getProfile(mobile) {
        if (mobile) {
            return this.profileModel
                .findOne({ mobile })
                .populate("boardId", "name")
                .populate("classId", "name");
        }
        return this.profileModel
            .find()
            .populate("boardId", "name")
            .populate("classId", "name");
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(profile_schema_1.Profile.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfileService);
//# sourceMappingURL=profile.service.js.map