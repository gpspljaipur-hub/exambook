import { Document, Types } from "mongoose";
export type ProfileDocument = Profile & Document;
export declare class Profile {
    userId: Types.ObjectId;
    fullName?: string;
    email?: string;
    mobile?: string;
    boardId: Types.ObjectId;
    classId: Types.ObjectId;
    language: string;
}
export declare const ProfileSchema: import("mongoose").Schema<Profile, import("mongoose").Model<Profile, any, any, any, any, any, Profile>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Profile, Document<unknown, {}, Profile, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Profile & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Profile, Document<unknown, {}, Profile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fullName?: import("mongoose").SchemaDefinitionProperty<string | undefined, Profile, Document<unknown, {}, Profile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string | undefined, Profile, Document<unknown, {}, Profile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mobile?: import("mongoose").SchemaDefinitionProperty<string | undefined, Profile, Document<unknown, {}, Profile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    boardId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Profile, Document<unknown, {}, Profile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    classId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Profile, Document<unknown, {}, Profile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    language?: import("mongoose").SchemaDefinitionProperty<string, Profile, Document<unknown, {}, Profile, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Profile>;
