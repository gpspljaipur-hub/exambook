import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Board } from "./schema/board.schema";
import { Model } from "mongoose";

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private boardModel: Model<Board>) {}

  async addBoard(name: string, description?: string) {
    const exists = await this.boardModel.findOne({ name });

    if (exists) {
      throw new BadRequestException("Board already exists");
    }

    return this.boardModel.create({ name, description });
  }

  async getBoards() {
    return this.boardModel.find();
  }
  async findById(id: string) {
    return this.boardModel.findById(id);
  }
}
