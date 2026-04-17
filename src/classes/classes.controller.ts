import { Controller, Post, Body, Get } from "@nestjs/common";
import { ClassesService } from "./classes.service";

@Controller("classes")
export class ClassesController {
  constructor(private classesService: ClassesService) {}

  @Post("add-class")
  addClass(@Body() body: any) {
    return this.classesService.create(body.name, body.boardId);
  }

  @Post("get-class")
  getClass(@Body("boardId") boardId: string) {
    return this.classesService.getClasses(boardId);
  }
}
