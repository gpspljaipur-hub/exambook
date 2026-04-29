// import { Controller, Post, Body } from "@nestjs/common";
// import { ChatService } from "./chat.service";

// @Controller("chat")
// export class ChatController {
//   constructor(private chatService: ChatService) {}

//   @Post("chat-question")
//   ask(@Body() body: any) {
//     const { question, userId } = body;
//     return this.chatService.askQuestion(question, userId);
//   }
// }

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

// import {
//   Controller,
//   Post,
//   Body,
//   UseInterceptors,
//   UploadedFile,
// } from "@nestjs/common";
// import { FileInterceptor } from "@nestjs/platform-express";
// import { diskStorage } from "multer";
// import { extname } from "path";
// import { ChatService } from "./chat.service";

// @Controller("chat")
// export class ChatController {
//   constructor(private chatService: ChatService) {}

//   @Post("chat-question")
//   @UseInterceptors(
//     FileInterceptor("image", {
//       storage: diskStorage({
//         destination: "./uploads",
//         filename: (req, file, cb) => {
//           const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
//           cb(null, uniqueName + extname(file.originalname));
//         },
//       }),
//     }),
//   )
//   ask(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
//     const { question, userId } = body;
//     return this.chatService.askQuestion(question, userId, file);
//   }
// }
