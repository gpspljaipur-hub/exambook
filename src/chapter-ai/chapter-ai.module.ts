// src/chapter-ai/chapter-ai.module.ts

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ChapterAiController } from "./chapter-ai.controller";
import { ChapterAiService } from "./chapter-ai.service";
import { ChapterContentSchema } from "./schemas/chapter.schema";
import { BoardSchema } from "../board/schema/board.schema";
import { ClassSchema } from "../classes/schema/class.schema";
import { SubjectSchema } from "../subject/schema/subject.schema";
import { ChapterSchema } from "../chapter/schema/chapter.schema";

// ⚠️ मान लो ये schemas तुमने already बनाए हैं

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "ChapterContent", schema: ChapterContentSchema },

      // 👇 ये names IMPORTANT हैं
      { name: "Board", schema: BoardSchema },
      { name: "Class", schema: ClassSchema },
      { name: "Subject", schema: SubjectSchema },
      { name: "Chapter", schema: ChapterSchema },
    ]),
  ],
  controllers: [ChapterAiController],
  providers: [ChapterAiService],
})
export class ChapterAiModule {}
