export declare class AiService {
    private API_KEY;
    generateMCQ(board: string, cls: string, subject: string, chapter: string, language: string): Promise<any>;
    retry(prompt: string): Promise<any>;
}
