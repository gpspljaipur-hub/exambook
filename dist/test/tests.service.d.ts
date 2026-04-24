import { Test } from "./schema/test.schema";
import { Model, Types } from "mongoose";
export declare class TestsService {
    private testModel;
    constructor(testModel: Model<Test>);
    findExistingTest(filter: {
        boardId: string;
        classId: string;
        subjectId: string;
        chapterId: string;
        language: string;
    }): Promise<(import("mongoose").Document<unknown, {}, Test, {}, import("mongoose").DefaultSchemaOptions> & Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    findOne(filter: any): Promise<(import("mongoose").Document<unknown, {}, Test, {}, import("mongoose").DefaultSchemaOptions> & Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    create(data: any): Promise<import("mongoose").Document<unknown, {}, Test, {}, import("mongoose").DefaultSchemaOptions> & Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, Test, {}, import("mongoose").DefaultSchemaOptions> & Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
