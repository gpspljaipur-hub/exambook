import { Document } from 'mongoose';
export type TokenDocument = Token & Document;
export declare class Token {
    userId: string;
    token: string;
}
export declare const TokenSchema: import("mongoose").Schema<Token, import("mongoose").Model<Token, any, any, any, any, any, Token>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Token, Document<unknown, {}, Token, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Token & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<string, Token, Document<unknown, {}, Token, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Token & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    token?: import("mongoose").SchemaDefinitionProperty<string, Token, Document<unknown, {}, Token, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Token & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Token>;
