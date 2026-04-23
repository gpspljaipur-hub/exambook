import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    sendOtp(phone: string): Promise<{
        success: boolean;
        message: string;
        phone: string;
        otp: string;
    }>;
    verifyOtp(body: any): Promise<{
        success: boolean;
        message: string;
        user: import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        };
    }>;
}
