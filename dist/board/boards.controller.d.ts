import { BoardsService } from "./boards.service";
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    addBoard(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/board.schema").Board, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/board.schema").Board & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getBoards(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/board.schema").Board, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/board.schema").Board & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
