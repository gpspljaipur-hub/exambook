import { AiService } from "./ai.service";
import { QuestionsService } from "../questions/questions.service";
import { ClassesService } from "../classes/classes.service";
import { BoardsService } from "../board/boards.service";
import { SubjectsService } from "../subject/subjects.service";
import { ChaptersService } from "../chapter/chapters.service";
import { TestsService } from "../test/tests.service";
export declare class AiController {
    private aiService;
    private questionsService;
    private boardsService;
    private classesService;
    private subjectsService;
    private chaptersService;
    private testsService;
    constructor(aiService: AiService, questionsService: QuestionsService, boardsService: BoardsService, classesService: ClassesService, subjectsService: SubjectsService, chaptersService: ChaptersService, testsService: TestsService);
    generate(body: any): Promise<{
        success: boolean;
        fromCache: boolean;
        testId: string;
        count: number;
        data: (import("mongoose").Document<unknown, {}, import("../questions/schema/question.schema").Question, {}, import("mongoose").DefaultSchemaOptions> & import("../questions/schema/question.schema").Question & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    } | {
        success: boolean;
        fromCache: boolean;
        testId: string;
        count: number;
        data: (Omit<import("mongoose").Document<unknown, {}, import("../questions/schema/question.schema").Question, {}, import("mongoose").DefaultSchemaOptions> & import("../questions/schema/question.schema").Question & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, string | number | symbol> & Omit<any, "_id">)[];
    }>;
    debugTest(testId: string): Promise<(import("mongoose").Document<unknown, {}, import("../questions/schema/question.schema").Question, {}, import("mongoose").DefaultSchemaOptions> & import("../questions/schema/question.schema").Question & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
