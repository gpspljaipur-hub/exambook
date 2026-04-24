import { Question } from "./schema/question.schema";
import { Model, Types } from "mongoose";
export declare class QuestionsService {
    private questionModel;
    constructor(questionModel: Model<Question>);
    getByTest(testId: string | Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, Question, {}, import("mongoose").DefaultSchemaOptions> & Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    saveMany(data: any[]): Promise<(Omit<import("mongoose").Document<unknown, {}, Question, {}, import("mongoose").DefaultSchemaOptions> & Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, string | number | symbol> & Omit<any, "_id">)[]>;
}
