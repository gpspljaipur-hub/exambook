import { Model } from "mongoose";
import { Chat } from "./schema/chat.schema";
export declare class ChatService {
    private chatModel;
    private API_KEY;
    constructor(chatModel: Model<Chat>);
    askQuestion(question: string, userId: string): Promise<{
        answer: any;
    }>;
}
