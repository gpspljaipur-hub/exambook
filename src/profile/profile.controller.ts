import { Controller, Post, Body } from "@nestjs/common";
import { ProfileService } from "./profile.service";

@Controller("profile")
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post("save")
  saveProfile(@Body() body: any) {
    return this.profileService.createOrUpdateProfile(body);
  }

  @Post("get")
  getProfile(@Body("mobile") mobile?: string) {
    return this.profileService.getProfile(mobile);
  }
}
