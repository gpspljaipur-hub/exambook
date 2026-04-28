import { ProfileService } from "./profile.service";
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    saveProfile(body: any): Promise<(import("mongoose").Document<unknown, {}, import("./schema/profile.schema").Profile, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/profile.schema").Profile & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getProfile(mobile?: string): Promise<(import("./schema/profile.schema").Profile & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("./schema/profile.schema").Profile & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[] | null>;
}
