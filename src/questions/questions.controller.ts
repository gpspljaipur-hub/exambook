import { Controller, Post, Body } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { Types } from "mongoose";

@Controller("questions")
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Post("get-by-test")
  getByTest(@Body("testId") testId: string) {
    return this.questionsService.getByTest(testId); // ✅ call service
  }

  @Post("debug-test")
  async debugTest(@Body("testId") testId: string) {
    console.log("DEBUG TEST ID:", testId);
    return this.questionsService.getByTest(testId);
  }
}
