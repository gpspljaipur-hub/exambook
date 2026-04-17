import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    sendOtp(phone: string): Promise<{
        message: string;
        phone: string;
        otp: string;
    }>;
    verifyOtp(body: any): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
    }>;
}
