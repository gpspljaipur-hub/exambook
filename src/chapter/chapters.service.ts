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
  async addChapter(name: string, subjectId: string) {
    const exists = await this.chapterModel.findOne({ name, subjectId });

    if (exists) {
      throw new BadRequestException("Chapter already exists");
    }

    return this.chapterModel.create({ name, subjectId });
  }

  async getChapters(subjectId: string) {
    return this.chapterModel.find({ subjectId }).populate({
      path: "subjectId",
      select: "name",
    });
  }

  async findById(id: string) {
    return this.chapterModel.findById(id);
  }
}
