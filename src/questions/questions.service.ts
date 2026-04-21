import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Question } from "./schema/question.schema";
import { Model } from "mongoose";

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name)
    private questionModel: Model<Question>,
  ) {}

  async getByTest(testId: string) {
    return this.questionModel.find({ testId });
  }

  async saveMany(data: any[]) {
    return this.questionModel.insertMany(data);
  }
}
