import { Profile } from "./schema/profile.schema";
import { Model, Types } from "mongoose";
export declare class ProfileService {
    private profileModel;
    constructor(profileModel: Model<Profile>);
    createOrUpdateProfile(data: any): Promise<(import("mongoose").Document<unknown, {}, Profile, {}, import("mongoose").DefaultSchemaOptions> & Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getProfile(mobile?: string): Promise<(import("mongoose").Document<unknown, {}, Profile, {}, import("mongoose").DefaultSchemaOptions> & Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | (import("mongoose").Document<unknown, {}, Profile, {}, import("mongoose").DefaultSchemaOptions> & Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[] | null>;
}
