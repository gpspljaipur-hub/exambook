import { SubjectsService } from "./subjects.service";
export declare class SubjectsController {
    private subjectsService;
    constructor(subjectsService: SubjectsService);
    addSubject(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/subject.schema").Subject, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/subject.schema").Subject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getSubjects(body: any): Promise<(import("mongoose").Document<unknown, {}, import("./schema/subject.schema").Subject, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/subject.schema").Subject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
