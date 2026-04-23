import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    sendOtp(phone: string): Promise<{
        success: boolean;
        message: string;
        phone: string;
        otp: string;
    }>;
    verifyOtp(phone: string, otp: string): Promise<{
        message: string;
        user: {
            success: boolean;
            message: string;
            user: import("mongoose").Document<unknown, {}, import("../users/schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../users/schema/user.schema").User & Required<{
                _id: import("mongoose").Types.ObjectId;
            }> & {
                __v: number;
            } & {
                id: string;
            };
        };
    }>;
}
