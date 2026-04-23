import { ChatService } from "./chat.service";
export declare class ChatController {
    private chatService;
    constructor(chatService: ChatService);
    ask(body: any): Promise<{
        answer: any;
    }>;
}
