import { Controller, Post, Body } from "@nestjs/common";
import { SubjectsService } from "./subjects.service";

@Controller("subjects")
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}
  @Post("add-subject")
  addSubject(@Body() body: any) {
    return this.subjectsService.addSubject(body.name, body.classId);
  }

  @Post("get-subject")
  getSubject(@Body("classId") classId: string) {
    return this.subjectsService.getSubjects(classId);
  }
}
