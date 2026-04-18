import { ChaptersService } from "./chapters.service";
export declare class ChaptersController {
    private chaptersService;
    constructor(chaptersService: ChaptersService);
    addChapter(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/chapter.schema").Chapter, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/chapter.schema").Chapter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getChapters(subjectId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/chapter.schema").Chapter, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/chapter.schema").Chapter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
