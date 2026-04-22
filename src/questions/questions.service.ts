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

  async getByTest(testId: string) {
    console.log("👉 RECEIVED TEST ID:", testId);

    const all = await this.questionModel.find();
    console.log(
      "👉 ALL TEST IDs IN DB:",
      all.map((q) => q.testId),
    );

    const data = await this.questionModel.find({
      testId: new Types.ObjectId(testId),
    });

    console.log("👉 FILTERED RESULT:", data);

    return data;
  }

  async saveMany(data: any[]) {
    return this.questionModel.insertMany(data);
  }
}
