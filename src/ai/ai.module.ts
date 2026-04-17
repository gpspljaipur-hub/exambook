import { Module } from "@nestjs/common";
import { AiService } from "./ai.service";
import { AiController } from "./ai.controller";

import { QuestionsModule } from "../questions/questions.module";
import { BoardsModule } from "../board/boards.module";
import { ClassesModule } from "../classes/classes.module"; // ✅
import { SubjectsModule } from "../subject/subjects.module";

@Module({
  imports: [
    QuestionsModule,
    BoardsModule,
    ClassesModule, // ✅ ADD THIS
    SubjectsModule,
  ],
  providers: [AiService],
  controllers: [AiController],
})
export class AiModule {}
