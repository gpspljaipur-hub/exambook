import { Document, Types } from "mongoose";
export type ClassDocument = ClassModel & Document;
export declare class ClassModel {
    name: string;
    boardId: Types.ObjectId;
}
export declare const ClassSchema: import("mongoose").Schema<ClassModel, import("mongoose").Model<ClassModel, any, any, any, any, any, ClassModel>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ClassModel, Document<unknown, {}, ClassModel, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ClassModel & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, ClassModel, Document<unknown, {}, ClassModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ClassModel & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    boardId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ClassModel, Document<unknown, {}, ClassModel, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ClassModel & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ClassModel>;
