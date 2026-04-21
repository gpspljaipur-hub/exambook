import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Test } from "./schema/test.schema";
import { Model } from "mongoose";

@Injectable()
export class TestsService {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  async create(data: any) {
    return this.testModel.create(data);
  }

  async findById(id: string) {
    return this.testModel.findById(id);
  }
}
