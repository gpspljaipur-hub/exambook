import { Controller, Post, Body } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller("chat")
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post("chat-question")
  ask(@Body() body: any) {
    const { question, userId } = body;
    return this.chatService.askQuestion(question, userId);
  }
}
