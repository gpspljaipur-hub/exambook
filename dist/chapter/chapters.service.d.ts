import { Chapter } from "./schema/chapter.schema";
import { Model } from "mongoose";
export declare class ChaptersService {
    private chapterModel;
    constructor(chapterModel: Model<Chapter>);
    addChapter(name: string, subjectId: string, classId: string, boardId: string): Promise<import("mongoose").Document<unknown, {}, Chapter, {}, import("mongoose").DefaultSchemaOptions> & Chapter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getChapters(subjectId: string, classId: string, boardId: string): Promise<(import("mongoose").Document<unknown, {}, Chapter, {}, import("mongoose").DefaultSchemaOptions> & Chapter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, Chapter, {}, import("mongoose").DefaultSchemaOptions> & Chapter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
