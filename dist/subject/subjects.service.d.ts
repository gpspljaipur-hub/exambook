import { Subject } from "./schema/subject.schema";
import { Model } from "mongoose";
import { Types, Document } from "mongoose";
export declare class SubjectsService {
    private subjectModel;
    constructor(subjectModel: Model<Subject>);
    addSubject(name: string, classId: string, boardId: string): Promise<Document<unknown, {}, Subject, {}, import("mongoose").DefaultSchemaOptions> & Subject & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getSubjects(classId: string, boardId: string): Promise<(Document<unknown, {}, Subject, {}, import("mongoose").DefaultSchemaOptions> & Subject & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findById(id: string): Promise<(Document<unknown, {}, Subject, {}, import("mongoose").DefaultSchemaOptions> & Subject & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
