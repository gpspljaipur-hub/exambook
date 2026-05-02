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

  // async askQuestion(question: string, userId: string, file?: any) {
  //   if (!question || !userId) {
  //     throw new BadRequestException("question and userId required");
  //   }

  //   let imageUrl = "";

  //   if (file) {
  //     imageUrl = `http://localhost:3000/uploads/${file.filename}`;
  //   }

  //   const prompt = imageUrl ? `${question}\nImage: ${imageUrl}` : question;

  //   const response = await axios.post(
  //     "https://api.groq.com/openai/v1/chat/completions",
  //     {
  //       model: "llama-3.3-70b-versatile",
  //       messages: [
  //         {
  //           role: "user",
  //           content: prompt,
  //         },
  //       ],
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${this.API_KEY}`,
  //         "Content-Type": "application/json",
  //       },
  //     },
  //   );

  //   const answer = response.data?.choices?.[0]?.message?.content || "No answer";

  //   await this.chatModel.create({
  //     question,
  //     answer,
  //     userId,
  //     image: imageUrl, // ✅ save image
  //   });

  //   return {
  //     answer,
  //     image: imageUrl,
  //   };
  // }
}
