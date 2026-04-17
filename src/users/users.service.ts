import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // 🔹 Generate OTP
  generateOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  // 🔹 Send OTP (ONLY for new users)
  async sendOtp(phone: string) {
    const user = await this.userModel.findOne({ phone });

    if (user) {
      throw new BadRequestException('Number already registered, please login');
    }

    const otp = this.generateOtp();

    // ⚠️ DO NOT SAVE USER YET
    return {
      message: 'OTP sent successfully',
      phone,
      otp, // testing only
    };
  }

  // 🔹 Verify OTP (Register + Login)
  async verifyOtp(phone: string, otp: string) {
    // ⚠️ In real app → compare with Redis / temp storage
    if (!otp) {
      throw new BadRequestException('OTP required');
    }

    let user = await this.userModel.findOne({ phone });

    if (!user) {
      // ✅ create user AFTER OTP verify
      user = await this.userModel.create({
        phone,
        isVerified: true,
      });
    }

    return {
      message: 'Login successful',
      user,
    };
  }
}
