import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  generateOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  async sendOtp(phone: string) {
    const user = await this.userModel.findOne({ phone });

    if (user) {
      throw new BadRequestException("Number already registered, please login");
    }

    const otp = this.generateOtp();
    return {
      message: "OTP sent successfully",
      phone,
      otp,
    };
  }
  async verifyOtp(phone: string, otp: string) {
    if (!otp) {
      throw new BadRequestException("OTP required");
    }

    let user = await this.userModel.findOne({ phone });

    if (!user) {
      user = await this.userModel.create({
        phone,
        isVerified: true,
      });
    }

    return {
      message: "Login successful",
      user,
    };
  }
}
