import { User } from './schema/user.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    generateOtp(): string;
    sendOtp(phone: string): Promise<{
        message: string;
        phone: string;
        otp: string;
    }>;
    verifyOtp(phone: string, otp: string): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
    }>;
}
