import { Document, Types } from "mongoose";
export type SubjectDocument = Subject & Document;
export declare class Subject {
    name: string;
    classId: Types.ObjectId;
}
export declare const SubjectSchema: import("mongoose").Schema<Subject, import("mongoose").Model<Subject, any, any, any, any, any, Subject>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Subject, Document<unknown, {}, Subject, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Subject & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Subject, Document<unknown, {}, Subject, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subject & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    classId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Subject, Document<unknown, {}, Subject, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Subject & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Subject>;
