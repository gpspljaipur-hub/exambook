import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ClassModel } from "./schema/class.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(ClassModel.name)
    private classModel: Model<ClassModel>,
  ) {}

  async create(name: string, boardId: string) {
    const objectId = new Types.ObjectId(boardId);

    const exists = await this.classModel.findOne({
      name,
      boardId: objectId,
    });

    if (exists) {
      throw new BadRequestException("Class already exists");
    }

    return this.classModel.create({
      name,
      boardId: objectId,
    });
  }

  async getClasses(boardId: string) {
    return this.classModel.find({
      boardId: new Types.ObjectId(boardId),
    });
  }

  async findById(id: string) {
    return this.classModel.findById(id);
  }
}
