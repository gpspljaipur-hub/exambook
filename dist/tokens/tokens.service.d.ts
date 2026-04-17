import { Token } from "./schema/token.schema";
import { Model } from "mongoose";
export declare class TokensService {
    private tokenModel;
    constructor(tokenModel: Model<Token>);
    saveToken(userId: string, token: string): Promise<import("mongoose").Document<unknown, {}, Token, {}, import("mongoose").DefaultSchemaOptions> & Token & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findToken(token: string): Promise<(import("mongoose").Document<unknown, {}, Token, {}, import("mongoose").DefaultSchemaOptions> & Token & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteToken(token: string): Promise<import("mongodb").DeleteResult>;
}
