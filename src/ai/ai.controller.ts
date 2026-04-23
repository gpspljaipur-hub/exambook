import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { AiService } from "./ai.service";
import { QuestionsService } from "../questions/questions.service";
import { ClassesService } from "../classes/classes.service";
import { BoardsService } from "../board/boards.service";
import { SubjectsService } from "../subject/subjects.service";
import { ChaptersService } from "../chapter/chapters.service";
import { TestsService } from "../test/tests.service";

@Controller("ai")
export class AiController {
  constructor(
    private aiService: AiService,
    private questionsService: QuestionsService,
    private boardsService: BoardsService,
    private classesService: ClassesService,
    private subjectsService: SubjectsService,
    private chaptersService: ChaptersService,
    private testsService: TestsService,
  ) {}

  @Post("generate-questions")
  async generate(@Body() body: any) {
    const { boardId, classId, subjectId, chapterId, language } = body;

    if (!boardId || !classId || !subjectId || !chapterId || !language) {
      throw new BadRequestException("All IDs are required");
    }

    console.log("STEP 1: START");

    const board = await this.boardsService.findById(boardId);
    const cls = await this.classesService.findById(classId);
    const subject = await this.subjectsService.findById(subjectId);
    const chapter = await this.chaptersService.findById(chapterId);

    console.log("STEP 2: DATA FETCHED");

    if (!board || !cls || !subject || !chapter) {
      throw new BadRequestException("Invalid board/class/subject/chapter");
    }

    let questions;
    try {
      questions = await this.aiService.generateMCQ(
        board.name,
        cls.name,
        subject.name,
        chapter.name,
        language,
      );
    } catch (err) {
      throw new BadRequestException("AI generation failed");
    }

    if (!Array.isArray(questions)) {
      throw new BadRequestException("Invalid AI response format");
    }

    const test = await this.testsService.create({
      boardId,
      classId,
      subjectId,
      chapterId,
      language,
    });

    console.log("STEP 5: TEST CREATED", test._id);
    // const formatted = questions.map((q: any) => ({
    //   question: q.question,
    //   options: Array.isArray(q.options) ? q.options : [q.options],
    //   correctAnswer: Array.isArray(q.correctAnswer)
    //     ? q.correctAnswer[0]
    //     : q.correctAnswer,
    //   explanation: q.explanation || "",
    //   boardId,
    //   classId,
    //   subjectId,
    //   chapterId,
    //   testId: test._id.toString(),
    // }));

    const formatted = questions.map((q: any) => ({
      question: q.question,
      options: Array.isArray(q.options) ? q.options : [q.options],
      correctAnswer: Array.isArray(q.correctAnswer)
        ? q.correctAnswer[0]
        : q.correctAnswer,
      explanation: q.explanation || "",
      boardId,
      classId,
      subjectId,
      chapterId,
      testId: test._id,
    }));

    console.log("STEP 6: FORMATTED", formatted.length);

    const saved = await this.questionsService.saveMany(formatted);

    console.log("STEP 7: SAVED", saved.length);
    return {
      success: true,
      testId: test._id.toString(),
      count: saved.length,
      data: saved,
    };
  }

  @Post("debug-test")
  debugTest(@Body("testId") testId: string) {
    return this.questionsService.getByTest(testId);
  }
}
