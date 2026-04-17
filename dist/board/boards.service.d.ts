import { Board } from "./schema/board.schema";
import { Model } from "mongoose";
export declare class BoardsService {
    private boardModel;
    constructor(boardModel: Model<Board>);
    addBoard(name: string, description?: string): Promise<import("mongoose").Document<unknown, {}, Board, {}, import("mongoose").DefaultSchemaOptions> & Board & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getBoards(): Promise<(import("mongoose").Document<unknown, {}, Board, {}, import("mongoose").DefaultSchemaOptions> & Board & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, Board, {}, import("mongoose").DefaultSchemaOptions> & Board & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
