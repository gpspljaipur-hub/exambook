import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Subject } from "./schema/subject.schema";
import { Model } from "mongoose";
import { Types, Document } from "mongoose";

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject.name)
    private subjectModel: Model<Subject>,
  ) {}

  async addSubject(name: string, classId: string, boardId: string) {
    const classObjectId = new Types.ObjectId(classId);
    const boardObjectId = new Types.ObjectId(boardId);

    const exists = await this.subjectModel.findOne({
      name,
      classId: classObjectId,
      boardId: boardObjectId,
    });

    if (exists) {
      throw new BadRequestException("Subject already exists");
    }

    return this.subjectModel.create({
      name,
      classId: classObjectId,
      boardId: boardObjectId,
    });
  }
  // async getSubjects(classId: string) {
  //   return this.subjectModel
  //     .find({
  //       classId: new Types.ObjectId(classId),
  //     })
  //     .populate({
  //       path: "classId",
  //       populate: { path: "boardId", select: "name" },
  //     });
  // }

  // async getSubjects(classId: string, boardId: string) {
  //   return this.subjectModel.find({
  //     classId: new Types.ObjectId(classId),
  //     boardId: new Types.ObjectId(boardId),
  //   });
  // }
  async getSubjects(classId: string, boardId: string) {
    return this.subjectModel
      .find({
        classId: new Types.ObjectId(classId),
        boardId: new Types.ObjectId(boardId),
      })
      .populate({
        path: "classId",
        select: "name boardId",
        populate: {
          path: "boardId",
          select: "name",
        },
      })
      .populate({
        path: "boardId",
        select: "name",
      });
  }

  async findById(id: string) {
    return this.subjectModel.findById(id);
  }
}
