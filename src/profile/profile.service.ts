import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Profile } from "./schema/profile.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<Profile>,
  ) {}

  async createOrUpdateProfile(data: any) {
    const { fullName, email, mobile, boardId, classId, language } = data;

    if (!boardId || !classId || !language) {
      throw new BadRequestException("boardId, classId, language required");
    }
    if (mobile) {
      const existing = await this.profileModel.findOne({ mobile });

      if (existing) {
        return this.profileModel.findOneAndUpdate(
          { mobile },
          {
            fullName,
            email,
            boardId: new Types.ObjectId(boardId),
            classId: new Types.ObjectId(classId),
            language,
          },
          { new: true },
        );
      }
    }
    return this.profileModel.create({
      fullName,
      email,
      mobile,
      boardId: new Types.ObjectId(boardId),
      classId: new Types.ObjectId(classId),
      language,
    });
  }

  async getProfile(mobile?: string) {
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
}
