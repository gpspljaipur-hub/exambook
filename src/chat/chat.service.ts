import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import axios from "axios";
import { Chat } from "./schema/chat.schema";
import { log } from "console";

@Injectable()
export class ChatService {
  private API_KEY =
    process.env.GROQ_API_KEY ||
    "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";

  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {}

  async askQuestion(question: string, userId: string) {
    if (!question || !userId) {
      throw new BadRequestException("question and userId required");
    }

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${this.API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response, "responseresponseresponse");
    const answer = response.data?.choices?.[0]?.message?.content || "No answer";

    await this.chatModel.create({
      question,
      answer,
      userId,
    });
    return { answer };
  }
}
