import { Document } from "mongoose";
export type BoardDocument = Board & Document;
export declare class Board {
    name: string;
    description?: string;
}
export declare const BoardSchema: import("mongoose").Schema<Board, import("mongoose").Model<Board, any, any, any, any, any, Board>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Board, Document<unknown, {}, Board, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Board & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Board, Document<unknown, {}, Board, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Board & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string | undefined, Board, Document<unknown, {}, Board, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Board & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Board>;
