import { Document, Types } from "mongoose";
export type ChapterDocument = Chapter & Document;
export declare class Chapter {
    name: string;
    boardId: Types.ObjectId;
    classId: Types.ObjectId;
    subjectId: Types.ObjectId;
}
export declare const ChapterSchema: import("mongoose").Schema<Chapter, import("mongoose").Model<Chapter, any, any, any, any, any, Chapter>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Chapter, Document<unknown, {}, Chapter, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Chapter & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Chapter, Document<unknown, {}, Chapter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Chapter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    boardId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Chapter, Document<unknown, {}, Chapter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Chapter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    classId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Chapter, Document<unknown, {}, Chapter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Chapter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subjectId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Chapter, Document<unknown, {}, Chapter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Chapter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Chapter>;
