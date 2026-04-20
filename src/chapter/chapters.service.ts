import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Chapter } from "./schema/chapter.schema";
import { Model } from "mongoose";

@Injectable()
export class ChaptersService {
  constructor(
    @InjectModel(Chapter.name)
    private chapterModel: Model<Chapter>,
  ) {}
  async addChapter(
    name: string,
    subjectId: string,
    classId: string,
    boardId: string,
  ) {
    const exists = await this.chapterModel.findOne({
      name,
      subjectId,
      classId,
      boardId,
    });

    if (exists) {
      throw new BadRequestException("Chapter already exists");
    }

    return this.chapterModel.create({
      name,
      subjectId,
      classId,
      boardId, // ✅ save it
    });
  }

  async getChapters(subjectId: string, classId: string, boardId: string) {
    return this.chapterModel
      .find({ subjectId, classId, boardId })
      .populate({
        path: "subjectId",
        select: "name",
      })
      .populate({
        path: "classId",
        select: "name",
      })
      .populate({
        path: "boardId",
        select: "name",
      });
  }

  async findById(id: string) {
    return this.chapterModel.findById(id);
  }
}
