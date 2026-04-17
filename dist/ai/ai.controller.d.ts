import { AiService } from './ai.service';
export declare class AiController {
    private aiService;
    constructor(aiService: AiService);
    getModels(): Promise<{
        success: boolean;
        data: any;
    }>;
    generate(prompt: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
}
