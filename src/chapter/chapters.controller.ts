import { Controller, Post, Body } from "@nestjs/common";
import { ChaptersService } from "./chapters.service";

@Controller("chapters")
export class ChaptersController {
  constructor(private chaptersService: ChaptersService) {}

  @Post("add-chapter")
  addChapter(@Body() body: any) {
    return this.chaptersService.addChapter(body.name, body.subjectId);
  }

  @Post("get-chapter")
  getChapters(@Body("subjectId") subjectId: string) {
    return this.chaptersService.getChapters(subjectId);
  }
}
