import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { AiService } from "./ai.service";
import { QuestionsService } from "../questions/questions.service";
import { ClassesService } from "../classes/classes.service";
import { BoardsService } from "../board/boards.service";
import { SubjectsService } from "../subject/subjects.service";

@Controller("ai")
export class AiController {
  constructor(
    private aiService: AiService,
    private questionsService: QuestionsService,
    private boardsService: BoardsService,
    private classesService: ClassesService,
    private subjectsService: SubjectsService,
  ) {}

  @Post("generate-questions")
  async generate(@Body() body: any) {
    const { boardId, classId, subjectId } = body;

    // ✅ Validate input
    if (!boardId || !classId || !subjectId) {
      throw new BadRequestException("All IDs are required");
    }

    // 🔹 fetch data
    const board = await this.boardsService.findById(boardId);
    const cls = await this.classesService.findById(classId);
    const subject = await this.subjectsService.findById(subjectId);

    // ❌ handle null
    if (!board || !cls || !subject) {
      throw new BadRequestException("Invalid board/class/subject");
    }

    // 🔹 generate AI questions
    let questions;
    try {
      questions = await this.aiService.generateMCQ(
        board.name,
        cls.name,
        subject.name,
      );
    } catch (err) {
      throw new BadRequestException("AI generation failed");
    }

    // ❌ safety check
    if (!Array.isArray(questions)) {
      throw new BadRequestException("Invalid AI response format");
    }

    // 🔹 attach IDs
    const formatted = questions.map((q: any) => ({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      boardId,
      classId,
      subjectId,
    }));

    // 🔹 save in DB
    const saved = await this.questionsService.saveMany(formatted);

    return {
      success: true,
      count: saved.length,
      data: saved,
    };
  }
}
