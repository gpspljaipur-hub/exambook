import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Chapter, ChapterSchema } from "./schema/chapter.schema";
import { ChaptersService } from "./chapters.service";
import { ChaptersController } from "./chapters.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema }]),
  ],
  providers: [ChaptersService],
  controllers: [ChaptersController],
  exports: [ChaptersService],
})
export class ChaptersModule {}
