import { Subject } from "./schema/subject.schema";
import { Model } from "mongoose";
export declare class SubjectsService {
    private subjectModel;
    constructor(subjectModel: Model<Subject>);
    addSubject(name: string, classId: string): Promise<import("mongoose").Document<unknown, {}, Subject, {}, import("mongoose").DefaultSchemaOptions> & Subject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getSubjects(classId: string): Promise<(import("mongoose").Document<unknown, {}, Subject, {}, import("mongoose").DefaultSchemaOptions> & Subject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, Subject, {}, import("mongoose").DefaultSchemaOptions> & Subject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
