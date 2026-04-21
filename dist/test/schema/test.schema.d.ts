import { Document, Types } from "mongoose";
export type TestDocument = Test & Document;
export declare class Test {
    boardId: Types.ObjectId;
    classId: Types.ObjectId;
    subjectId: Types.ObjectId;
    chapterId: Types.ObjectId;
    language: string;
}
export declare const TestSchema: import("mongoose").Schema<Test, import("mongoose").Model<Test, any, any, any, any, any, Test>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Test, Document<unknown, {}, Test, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    boardId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    classId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subjectId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    chapterId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    language?: import("mongoose").SchemaDefinitionProperty<string, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Test>;
