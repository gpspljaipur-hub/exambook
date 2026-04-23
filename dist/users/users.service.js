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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schema/user.schema");
const mongoose_2 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    normalizePhone(phone) {
        return phone.toString().replace(/\D/g, "").slice(-10);
    }
    generateOtp() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }
    async sendOtp(phone) {
        if (!phone) {
            throw new common_1.BadRequestException("Phone number required");
        }
        const normalizedPhone = this.normalizePhone(phone);
        console.log("Normalized Phone:", normalizedPhone);
        const user = await this.userModel.findOne({
            phone: normalizedPhone,
        });
        if (user) {
            throw new common_1.BadRequestException("Number already registered, please login");
        }
        const otp = this.generateOtp();
        return {
            success: true,
            message: "OTP sent successfully",
            phone: normalizedPhone,
            otp,
        };
    }
    async verifyOtp(phone, otp) {
        if (!phone) {
            throw new common_1.BadRequestException("Phone number required");
        }
        if (!otp) {
            throw new common_1.BadRequestException("OTP required");
        }
        const normalizedPhone = this.normalizePhone(phone);
        console.log("Verify Phone:", normalizedPhone);
        let user = await this.userModel.findOne({
            phone: normalizedPhone,
        });
        if (!user) {
            user = await this.userModel.create({
                phone: normalizedPhone,
                isVerified: true,
            });
        }
        return {
            success: true,
            message: "Login successful",
            user,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map