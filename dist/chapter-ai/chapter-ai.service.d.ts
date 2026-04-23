import { Model } from "mongoose";
export declare class ChapterAiService {
    private chapterModel;
    private contentModel;
    private API_KEY;
    constructor(chapterModel: Model<any>, contentModel: Model<any>);
    generateByIds(dto: any): Promise<{
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
