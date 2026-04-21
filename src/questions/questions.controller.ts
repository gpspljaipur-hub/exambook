import { Controller, Post, Body } from "@nestjs/common";
import { QuestionsService } from "./questions.service";

@Controller("questions")
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  // ✅ Get questions by testId
  @Post("get-by-test")
  getByTest(@Body("testId") testId: string) {
    return this.questionsService.getByTest(testId);
  }
}
