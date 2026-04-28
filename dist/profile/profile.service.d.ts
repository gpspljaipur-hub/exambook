import { Profile } from "./schema/profile.schema";
import { Model, Types } from "mongoose";
import { User } from "../users/schema/user.schema";
export declare class ProfileService {
    private profileModel;
    private userModel;
    constructor(profileModel: Model<Profile>, userModel: Model<User>);
    createOrUpdateProfile(data: any): Promise<(import("mongoose").Document<unknown, {}, Profile, {}, import("mongoose").DefaultSchemaOptions> & Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getProfile(mobile?: string): Promise<(Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | (Profile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[] | null>;
}
