// import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
// import { AiService } from "./ai.service";
// import { QuestionsService } from "../questions/questions.service";
// import { ClassesService } from "../classes/classes.service";
// import { BoardsService } from "../board/boards.service";
// import { SubjectsService } from "../subject/subjects.service";
// import { ChaptersService } from "../chapter/chapters.service";
// import { TestsService } from "../test/tests.service";
// import { Types } from "mongoose";
// import { log } from "console";

// @Controller("ai")
// export class AiController {
//   constructor(
//     private aiService: AiService,
//     private questionsService: QuestionsService,
//     private boardsService: BoardsService,
//     private classesService: ClassesService,
//     private subjectsService: SubjectsService,
//     private chaptersService: ChaptersService,
//     private testsService: TestsService,
//   ) {}

//   @Post("generate-questions")
//   async generate(@Body() body: any) {
//     const { boardId, classId, subjectId, chapterId, language } = body;
//     if (!boardId || !classId || !subjectId || !chapterId || !language) {
//       throw new BadRequestException("All IDs are required");
//     }
//     const board = await this.boardsService.findById(boardId);
//     const cls = await this.classesService.findById(classId);
//     const subject = await this.subjectsService.findById(subjectId);
//     const chapter = await this.chaptersService.findById(chapterId);

//     if (!board || !cls || !subject || !chapter) {
//       throw new BadRequestException("Invalid board/class/subject/chapter");
//     }
//     const objectChapterId = new Types.ObjectId(chapterId);

//     const existingTest = await this.testsService.findOne({
//       boardId,
//       classId,
//       subjectId,
//       chapterId: objectChapterId,
//       language,
//     });
//     console.log("Existing test:", existingTest);
//     if (existingTest) {
//       const existingQuestions = await this.questionsService.getByTest(
//         existingTest._id.toString(),
//       );

//       if (existingQuestions.length > 0) {
//         return {
//           success: true,
//           fromCache: true,
//           testId: existingTest._id.toString(),
//           count: existingQuestions.length,
//           data: existingQuestions,
//         };
//       }
//     }
//     const test = await this.testsService.create({
//       boardId,
//       classId,
//       subjectId,
//       chapterId: objectChapterId,
//       language,
//     });
//     let questions;
//     try {
//       questions = await this.aiService.generateMCQ(
//         board.name,
//         cls.name,
//         subject.name,
//         chapter.name,
//         language,
//       );
//     } catch (err) {
//       console.error("AI ERROR:", err);
//       throw new BadRequestException("AI generation failed");
//     }

//     if (!Array.isArray(questions)) {
//       throw new BadRequestException("Invalid AI response format");
//     }
//     const formatted = questions.map((q: any) => ({
//       question: q.question,
//       options: Array.isArray(q.options) ? q.options : [q.options],
//       correctAnswer: Array.isArray(q.correctAnswer)
//         ? q.correctAnswer[0]
//         : q.correctAnswer,
//       explanation: q.explanation || "",
//       boardId,
//       classId,
//       subjectId,
//       chapterId,
//       testId: test._id,
//       language,
//     }));
//     const saved = await this.questionsService.saveMany(formatted);
//     return {
//       success: true,
//       fromCache: false,
//       testId: test._id.toString(),
//       count: saved.length,
//       data: saved,
//     };
//   }

//   @Post("debug-test")
//   async debugTest(@Body("testId") testId: string) {
//     return this.questionsService.getByTest(testId);
//   }
// }

import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { AiService } from "./ai.service";
import { QuestionsService } from "../questions/questions.service";
import { ClassesService } from "../classes/classes.service";
import { BoardsService } from "../board/boards.service";
import { SubjectsService } from "../subject/subjects.service";
import { ChaptersService } from "../chapter/chapters.service";
import { TestsService } from "../test/tests.service";
import { Types } from "mongoose";

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

    //  Convert IDs
    const boardObjectId = new Types.ObjectId(boardId);
    const classObjectId = new Types.ObjectId(classId);
    const subjectObjectId = new Types.ObjectId(subjectId);
    const chapterObjectId = new Types.ObjectId(chapterId);
    console.log("chapterObjectId:", chapterObjectId);

    const board = await this.boardsService.findById(boardId);
    const cls = await this.classesService.findById(classId);
    const subject = await this.subjectsService.findById(subjectId);
    const chapter = await this.chaptersService.findById(chapterId);

    if (!board || !cls || !subject || !chapter) {
      throw new BadRequestException("Invalid board/class/subject/chapter");
    }

    let test = await this.testsService.findOne({
      boardId: boardObjectId,
      classId: classObjectId,
      subjectId: subjectObjectId,
      chapterId: chapterObjectId,
      language,
    });

    if (test) {
      const existingQuestions = await this.questionsService.getByTest(
        test._id.toString(),
      );

      console.log("Existing Questions:", existingQuestions.length);

      if (existingQuestions.length > 0) {
        return {
          success: true,
          fromCache: true,
          testId: test._id.toString(),
          count: existingQuestions.length,
          data: existingQuestions,
        };
      }

      // Case 2: Test exists but no questions → AI call
      console.log("Empty questions → calling AI");
    }

    //  2. Create test if not exist
    if (!test) {
      test = await this.testsService.create({
        boardId: boardObjectId,
        classId: classObjectId,
        subjectId: subjectObjectId,
        chapterId: chapterObjectId,
        language,
      });
    }

    //  3. Call AI
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
      console.error("AI ERROR:", err);
      throw new BadRequestException("AI generation failed");
    }

    if (!Array.isArray(questions)) {
      throw new BadRequestException("Invalid AI response format");
    }

    //  4. Format data
    const formatted = questions.map((q: any) => ({
      question: q.question,
      options: Array.isArray(q.options) ? q.options : [q.options],
      correctAnswer: Array.isArray(q.correctAnswer)
        ? q.correctAnswer[0]
        : q.correctAnswer,
      explanation: q.explanation || "",
      boardId: boardObjectId,
      classId: classObjectId,
      subjectId: subjectObjectId,
      chapterId: chapterObjectId,
      testId: test._id, //  SAME TEST ID
      language,
    }));

    //  5. Save questions
    const saved = await this.questionsService.saveMany(formatted);

    return {
      success: true,
      fromCache: false,
      testId: test._id.toString(),
      count: saved.length,
      data: saved,
    };
  }

  @Post("debug-test")
  async debugTest(@Body("testId") testId: string) {
    return this.questionsService.getByTest(testId);
  }
}
