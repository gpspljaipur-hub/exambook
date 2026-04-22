import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Question, QuestionSchema } from "./schema/question.schema";
import { QuestionsService } from "./questions.service";
import { QuestionsController } from "./questions.controller"; // ✅ MUST

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
    ]),
  ],
  providers: [QuestionsService],
  controllers: [QuestionsController], // ✅ MUST ADD
  exports: [QuestionsService],
})
export class QuestionsModule {}
