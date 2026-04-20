import { Controller, Post, Body } from "@nestjs/common";
import { ChaptersService } from "./chapters.service";

@Controller("chapters")
export class ChaptersController {
  constructor(private chaptersService: ChaptersService) {}

  @Post("add-chapter")
  addChapter(@Body() body: any) {
    return this.chaptersService.addChapter(
      body.name,
      body.subjectId,
      body.classId,
      body.boardId,
    );
  }

  @Post("get-chapter")
  getChapters(@Body() body: any) {
    return this.chaptersService.getChapters(
      body.subjectId,
      body.classId,
      body.boardId,
    );
  }
}
