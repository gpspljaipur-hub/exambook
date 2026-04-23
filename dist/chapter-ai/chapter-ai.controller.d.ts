import { ChapterAiService } from "./chapter-ai.service";
import { ChapterByIdDto } from "./dto/chapter-ai.dto";
export declare class ChapterAiController {
    private readonly service;
    constructor(service: ChapterAiService);
    generate(dto: ChapterByIdDto): Promise<{
        success: boolean;
        message: string;
        source?: undefined;
        data?: undefined;
        raw?: undefined;
    } | {
        success: boolean;
        source: string;
        data: any;
        message?: undefined;
        raw?: undefined;
    } | {
        success: boolean;
        message: string;
        raw: any;
        source?: undefined;
        data?: undefined;
    }>;
}
