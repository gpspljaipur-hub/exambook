import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Test } from "./schema/test.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class TestsService {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}
  async findExistingTest(filter: {
    boardId: string;
    classId: string;
    subjectId: string;
    chapterId: string;
    language: string;
  }) {
    return this.testModel.findOne({
      boardId: new Types.ObjectId(filter.boardId),
      classId: new Types.ObjectId(filter.classId),
      subjectId: new Types.ObjectId(filter.subjectId),
      chapterId: new Types.ObjectId(filter.chapterId),
      language: filter.language,
    });
  }
  async findOne(filter: any) {
    return this.testModel.findOne(filter);
  }
  async create(data: any) {
    return this.testModel.create(data);
  }

  async findById(id: string) {
    return this.testModel.findById(id);
  }
}
