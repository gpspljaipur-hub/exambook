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
const user_schema_1 = require("../users/schema/user.schema");
let ProfileService = class ProfileService {
    constructor(profileModel, userModel) {
        this.profileModel = profileModel;
        this.userModel = userModel;
    }
    async createOrUpdateProfile(data) {
        const { fullName, email, mobile, boardId, classId, language } = data;
        if (!mobile || !boardId || !classId || !language) {
            throw new common_1.BadRequestException("All fields required");
        }
        const user = await this.userModel.findOne({ phone: mobile });
        if (!user) {
            throw new common_1.BadRequestException("User not found, please login first");
        }
        const existing = await this.profileModel.findOne({ mobile });
        if (existing) {
            return this.profileModel.findOneAndUpdate({ mobile }, {
                userId: user._id,
                fullName,
                email,
                boardId: new mongoose_2.Types.ObjectId(boardId),
                classId: new mongoose_2.Types.ObjectId(classId),
                language,
            }, { new: true });
        }
        return this.profileModel.create({
            userId: user._id,
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
                .populate("classId", "name")
                .populate("userId", "_id phone")
                .lean();
        }
        return this.profileModel
            .find()
            .populate("boardId", "name")
            .populate("classId", "name")
            .populate("userId", "_id phone")
            .lean();
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(profile_schema_1.Profile.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ProfileService);
//# sourceMappingURL=profile.service.js.map