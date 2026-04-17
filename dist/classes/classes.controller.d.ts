import { ClassesService } from "./classes.service";
export declare class ClassesController {
    private classesService;
    constructor(classesService: ClassesService);
    addClass(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/class.schema").ClassModel, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/class.schema").ClassModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getClass(boardId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/class.schema").ClassModel, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/class.schema").ClassModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
