import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Token } from "./schema/token.schema";
import { Model } from "mongoose";

@Injectable()
export class TokensService {
  constructor(@InjectModel(Token.name) private tokenModel: Model<Token>) {}

  async saveToken(userId: string, token: string) {
    const saved = await this.tokenModel.create({
      userId,
      token,
    });
    return saved;
  }

  async findToken(token: string) {
    return this.tokenModel.findOne({ token });
  }

  async deleteToken(token: string) {
    return this.tokenModel.deleteOne({ token });
  }
}
