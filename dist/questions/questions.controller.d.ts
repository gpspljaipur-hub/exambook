import { QuestionsService } from "./questions.service";
import { Types } from "mongoose";
export declare class QuestionsController {
    private questionsService;
    constructor(questionsService: QuestionsService);
    getByTest(testId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/question.schema").Question, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/question.schema").Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    debugTest(testId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/question.schema").Question, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/question.schema").Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
