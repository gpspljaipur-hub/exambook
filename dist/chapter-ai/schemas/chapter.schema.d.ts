import { Types, Document } from "mongoose";
export type ChapterContentDocument = ChapterContent & Document;
export declare class ChapterContent {
    boardId: Types.ObjectId;
    classId: Types.ObjectId;
    subjectId: Types.ObjectId;
    chapterId: Types.ObjectId;
    chapterName: string;
    introduction: string;
    theory: any[];
    formulas: any[];
    importantPoints: string[];
    examples: any[];
    mcqs: any[];
    shortQuestions: any[];
    longQuestions: any[];
    revisionNotes: string[];
    difficulty: string;
    estimatedTime: string;
}
export declare const ChapterContentSchema: import("mongoose").Schema<ChapterContent, import("mongoose").Model<ChapterContent, any, any, any, any, any, ChapterContent>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChapterContent, Document<unknown, {}, ChapterContent, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    boardId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    classId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subjectId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    chapterId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    chapterName?: import("mongoose").SchemaDefinitionProperty<string, ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    introduction?: import("mongoose").SchemaDefinitionProperty<string, ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    theory?: import("mongoose").SchemaDefinitionProperty<any[], ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    formulas?: import("mongoose").SchemaDefinitionProperty<any[], ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    importantPoints?: import("mongoose").SchemaDefinitionProperty<string[], ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    examples?: import("mongoose").SchemaDefinitionProperty<any[], ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mcqs?: import("mongoose").SchemaDefinitionProperty<any[], ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    shortQuestions?: import("mongoose").SchemaDefinitionProperty<any[], ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    longQuestions?: import("mongoose").SchemaDefinitionProperty<any[], ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    revisionNotes?: import("mongoose").SchemaDefinitionProperty<string[], ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    difficulty?: import("mongoose").SchemaDefinitionProperty<string, ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    estimatedTime?: import("mongoose").SchemaDefinitionProperty<string, ChapterContent, Document<unknown, {}, ChapterContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ChapterContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ChapterContent>;
