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

  // ✅ Add Subject
  async addSubject(name: string, classId: string, boardId: string) {
    const exists = await this.subjectModel.findOne({
      name,
      classId,
      boardId,
    });

    if (exists) {
      throw new BadRequestException("Subject already exists");
    }

    return this.subjectModel.create({
      name,
      classId,
      boardId,
    });
  }

  // ✅ Get Subjects
  async getSubjects(classId: string, boardId: string) {
    return this.subjectModel.find({ classId, boardId }).populate({
      path: "classId",
      populate: { path: "boardId", select: "name" },
    });
  }

  async findById(id: string) {
    return this.subjectModel.findById(id);
  }
}
