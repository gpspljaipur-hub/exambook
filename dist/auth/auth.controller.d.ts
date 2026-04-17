import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    sendOtp(phone: string): Promise<{
        message: string;
        phone: string;
        otp: string;
    }>;
    verifyOtp(body: any): Promise<{
        message: string;
        user: {
            message: string;
            user: import("mongoose").Document<unknown, {}, import("../users/schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../users/schema/user.schema").User & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            } & {
                id: string;
            };
        };
    }>;
}
