import { Question } from "./schema/question.schema";
import { Model } from "mongoose";
export declare class QuestionsService {
    private questionModel;
    constructor(questionModel: Model<Question>);
    saveMany(data: any[]): Promise<(Omit<import("mongoose").Document<unknown, {}, Question, {}, import("mongoose").DefaultSchemaOptions> & Question & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, string | number | symbol> & Omit<any, "_id">)[]>;
}
