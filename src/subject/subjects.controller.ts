import { Controller, Post, Body } from "@nestjs/common";
import { SubjectsService } from "./subjects.service";

@Controller("subjects")
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  // ✅ Add Subject (with boardId)
  @Post("add-subject")
  addSubject(@Body() body: any) {
    return this.subjectsService.addSubject(
      body.name,
      body.classId,
      body.boardId, // ✅ added
    );
  }

  // ✅ Get Subjects (with boardId)
  @Post("get-subject")
  getSubject(@Body() body: any) {
    return this.subjectsService.getSubjects(
      body.classId,
      body.boardId, // ✅ added
    );
  }
}
