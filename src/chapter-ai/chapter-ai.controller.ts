// src/chapter-ai/chapter-ai.controller.ts

import { Controller, Post, Body } from "@nestjs/common";
import { ChapterAiService } from "./chapter-ai.service";
import { ChapterByIdDto } from "./dto/chapter-ai.dto";

@Controller("chapter-ai")
export class ChapterAiController {
  constructor(private readonly service: ChapterAiService) {}

  @Post("generate")
  generate(@Body() dto: ChapterByIdDto) {
    return this.service.generateByIds(dto);
  }
}
