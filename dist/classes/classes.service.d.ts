import { ClassModel } from "./schema/class.schema";
import { Model } from "mongoose";
export declare class ClassesService {
    private classModel;
    constructor(classModel: Model<ClassModel>);
    create(name: string, boardId: string): Promise<import("mongoose").Document<unknown, {}, ClassModel, {}, import("mongoose").DefaultSchemaOptions> & ClassModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getClasses(boardId: string): Promise<(import("mongoose").Document<unknown, {}, ClassModel, {}, import("mongoose").DefaultSchemaOptions> & ClassModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, ClassModel, {}, import("mongoose").DefaultSchemaOptions> & ClassModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
