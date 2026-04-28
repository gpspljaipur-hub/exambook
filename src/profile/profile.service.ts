import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Profile } from "./schema/profile.schema";

import { Model, Types } from "mongoose";
import { User } from "../users/schema/user.schema";

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<Profile>,

    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  // ✅ CREATE / UPDATE PROFILE
  async createOrUpdateProfile(data: any) {
    const { fullName, email, mobile, boardId, classId, language } = data;

    if (!mobile || !boardId || !classId || !language) {
      throw new BadRequestException("All fields required");
    }

    // 🔥 FIND USER BY MOBILE
    const user = await this.userModel.findOne({ phone: mobile });

    if (!user) {
      throw new BadRequestException("User not found, please login first");
    }

    // 🔥 CHECK EXISTING PROFILE
    const existing = await this.profileModel.findOne({ mobile });

    if (existing) {
      return this.profileModel.findOneAndUpdate(
        { mobile },
        {
          userId: user._id, // ✅ LINK
          fullName,
          email,
          boardId: new Types.ObjectId(boardId),
          classId: new Types.ObjectId(classId),
          language,
        },
        { new: true },
      );
    }

    // 🔥 CREATE NEW
    return this.profileModel.create({
      userId: user._id, // ✅ LINK
      fullName,
      email,
      mobile,
      boardId: new Types.ObjectId(boardId),
      classId: new Types.ObjectId(classId),
      language,
    });
  }

  // ✅ GET PROFILE WITH USER ID
  async getProfile(mobile?: string) {
    if (mobile) {
      return this.profileModel
        .findOne({ mobile })
        .populate("boardId", "name")
        .populate("classId", "name")
        .populate("userId", "_id phone") // ✅ USER INFO
        .lean();
    }

    return this.profileModel
      .find()
      .populate("boardId", "name")
      .populate("classId", "name")
      .populate("userId", "_id phone")
      .lean();
  }
}
