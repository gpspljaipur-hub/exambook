import { Document, Types } from "mongoose";
export type QuestionDocument = Question & Document;
export declare class Question {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    boardId: Types.ObjectId;
    classId: Types.ObjectId;
    subjectId: Types.ObjectId;
}
export declare const QuestionSchema: import("mongoose").Schema<Question, import("mongoose").Model<Question, any, any, any, any, any, Question>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Question, Document<unknown, {}, Question, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Question & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    question?: import("mongoose").SchemaDefinitionProperty<string, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    options?: import("mongoose").SchemaDefinitionProperty<string[], Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    correctAnswer?: import("mongoose").SchemaDefinitionProperty<string, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    explanation?: import("mongoose").SchemaDefinitionProperty<string, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    boardId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    classId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subjectId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Question>;
