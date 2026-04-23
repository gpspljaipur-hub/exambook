import { User } from "./schema/user.schema";
import { Model } from "mongoose";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    normalizePhone(phone: string): string;
    generateOtp(): string;
    sendOtp(phone: string): Promise<{
        success: boolean;
        message: string;
        phone: string;
        otp: string;
    }>;
    verifyOtp(phone: string, otp: string): Promise<{
        success: boolean;
        message: string;
        user: import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        };
    }>;
}
