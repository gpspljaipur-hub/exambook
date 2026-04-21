import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Subject } from "./schema/subject.schema";
import { Model } from "mongoose";

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject.name)
    private subjectModel: Model<Subject>,
  ) {}

  async addSubject(name: string, classId: string) {
    const exists = await this.subjectModel.findOne({ name, classId });

    if (exists) {
      throw new BadRequestException("Subject already exists");
    }

    return this.subjectModel.create({ name, classId });
  }
  async getSubjects(classId: string) {
    return this.subjectModel.find({ classId }).populate({
      path: "classId",
      populate: { path: "boardId", select: "name" },
    });
  }

  async findById(id: string) {
    return this.subjectModel.findById(id);
  }
}
