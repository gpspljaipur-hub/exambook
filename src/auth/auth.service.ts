import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async sendOtp(phone: string) {
    return this.usersService.sendOtp(phone);
  }

  // 🔹 Verify OTP (LOGIN)
  async verifyOtp(phone: string, otp: string) {
    const user = await this.usersService.verifyOtp(phone, otp);

    if (!user) {
      throw new BadRequestException('Invalid OTP');
    }

    return {
      message: 'Login successful',
      user,
    };
  }
}
