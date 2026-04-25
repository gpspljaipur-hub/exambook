import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Question } from "./schema/question.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name)
    private questionModel: Model<Question>,
  ) {}

  // async getByTest(testId: string) {
  //   const all = await this.questionModel.find();
  //   console.log(
  //     all.map((q) => q.testId),
  //   );

  //   const data = await this.questionModel.find({
  //     testId: new Types.ObjectId(testId),
  //   });

  //   return data;
  // }

  // async saveMany(data: any[]) {
  //   return this.questionModel.insertMany(data);
  // }
  // async getByTest(testId: string | Types.ObjectId) {
  //   return this.questionModel.find({ testId });
  // }
  // async getByTest(testId: string) {
  //   const objectId = new Types.ObjectId(testId);

  //   const all = await this.questionModel.find();
  //   console.log(
  //     "ALL TEST IDs:",
  //     all.map((q) => q.testId),
  //   );

  //   const data = await this.questionModel.find({ testId: objectId });

  //   console.log("FILTERED:", data);

  //   return data;
  // }
  async getByTest(testId: string) {
    return this.questionModel.find({
      testId: new Types.ObjectId(testId),
    });
  }
  async saveMany(data: any[]) {
    return this.questionModel.insertMany(data);
  }
}
