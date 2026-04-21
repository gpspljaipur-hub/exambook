import { Test } from "./schema/test.schema";
import { Model } from "mongoose";
export declare class TestsService {
    private testModel;
    constructor(testModel: Model<Test>);
    create(data: any): Promise<import("mongoose").Document<unknown, {}, Test, {}, import("mongoose").DefaultSchemaOptions> & Test & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, Test, {}, import("mongoose").DefaultSchemaOptions> & Test & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
