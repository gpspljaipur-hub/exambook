import { Injectable } from "@nestjs/common";
import axios from "axios";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";

@Injectable()
export class ChapterAiService {
  private API_KEY =
    process.env.GROQ_API_KEY ||
    "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";

  constructor(
    @InjectModel("Chapter") private chapterModel: Model<any>,
    @InjectModel("ChapterContent") private contentModel: Model<any>,
  ) {}

  async generateByIds(dto: any) {
    const { boardId, classId, subjectId, chapterId } = dto;

    try {
      const chapter = await this.chapterModel
        .findById(new Types.ObjectId(chapterId))
        .populate({
          path: "subjectId",
          populate: {
            path: "classId",
            populate: {
              path: "boardId",
            },
          },
        });

      if (!chapter) {
        return { success: false, message: "Chapter not found" };
      }

      const chapterName = chapter.name;
      const subjectName = chapter.subjectId?.name;
      const className = chapter.subjectId?.classId?.name;
      const boardName = chapter.subjectId?.classId?.boardId?.name;

      if (!boardName || !className || !subjectName) {
        return {
          success: false,
          message: "Relation missing (board/class/subject)",
        };
      }

      const existing = await this.contentModel.findOne({
        chapterId: new Types.ObjectId(chapterId),
      });

      if (existing) {
        return {
          success: true,
          source: "database",
          data: existing,
        };
      }

      const prompt = `
You are an expert teacher.

Generate FULL study material in STRICT JSON format.

Do NOT return anything except JSON.

Format:
{
  "chapterName": "",
  "introduction": "",
  "theory": [
    { "topic": "", "content": "" }
  ],
  "formulas": [
    { "name": "", "formula": "" }
  ],
  "importantPoints": [],
  "examples": [
    { "question": "", "solution": "" }
  ],
  "mcqs": [
    { "question": "", "options": [], "answer": "" }
  ],
  "shortQuestions": [
    { "question": "", "answer": "" }
  ],
  "longQuestions": [
    { "question": "", "answer": "" }
  ],
  "revisionNotes": [],
  "difficulty": "",
  "estimatedTime": ""
}

Board: ${boardName}
Class: ${className}
Subject: ${subjectName}
Chapter: ${chapterName}
`;

      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: prompt,
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

      let aiText = response.data.choices[0].message.content;

      console.log("RAW AI RESPONSE:", aiText);
      aiText = aiText.replace(/```json|```/g, "").trim();

      let parsed;

      try {
        parsed = JSON.parse(aiText);
      } catch (e) {
        return {
          success: false,
          message: "AI returned invalid JSON",
          raw: aiText,
        };
      }

      const saved = await this.contentModel.findOneAndUpdate(
        { chapterId: chapterId }, // ⚠️ same type as DB
        {
          boardId,
          classId,
          subjectId,
          chapterId,
          ...parsed,
        },
        {
          upsert: true,
          returnDocument: "after",
        },
      );

      return {
        success: true,
        source: "ai",
        data: saved,
      };
    } catch (error) {
      console.error("GROQ ERROR:", error);

      return {
        success: false,
        message: "AI generation failed",
      };
    }
  }
}
