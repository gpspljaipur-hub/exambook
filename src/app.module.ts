// import { Module } from "@nestjs/common";
// import { AppController } from "./app.controller";
// import { AppService } from "./app.service";
// import { MongooseModule } from "@nestjs/mongoose";
// import { ConfigModule, ConfigService } from "@nestjs/config";
// import { UsersModule } from "./users/users.module";
// import { AuthModule } from "./auth/auth.module";
// import { TokensModule } from "./tokens/tokens.module";
// import { AiModule } from "./ai/ai.module";
// import { ClassesModule } from "./classes/classes.module";
// import { SubjectsModule } from "./subject/subjects.module";
// import { BoardsModule } from "./board/boards.module";
// import { ChaptersModule } from "./chapter/chapters.module";
// import { QuestionsModule } from "./questions/questions.module";
// import { ProfileModule } from "./profile/profile.module";
// import { ChatModule } from "./chat/schema/chat.module";
// import { ChapterAiModule } from "./chapter-ai/chapter-ai.module";
// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }),

//     MongooseModule.forRootAsync({
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         // uri: configService.get<string>("MONGO_URI"),
//         uri: configService.get<string>(
//           "mongodb+srv://rajatsonisoni77_db_user:uvSHLGfIBTjqN1oa@cluster0.hysct9e.mongodb.net/exambook?retryWrites=true&w=majority",
//         ),
//       }),
//     }),
//     UsersModule,
//     AuthModule,
//     TokensModule,
//     AiModule,
//     BoardsModule,
//     ClassesModule,
//     SubjectsModule,
//     ChaptersModule,
//     QuestionsModule,
//     ProfileModule,
//     ChatModule,
//     ChapterAiModule,
//   ],
// })
// export class AppModule {}

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { TokensModule } from "./tokens/tokens.module";
import { AiModule } from "./ai/ai.module";
import { ClassesModule } from "./classes/classes.module";
import { SubjectsModule } from "./subject/subjects.module";
import { BoardsModule } from "./board/boards.module";
import { ChaptersModule } from "./chapter/chapters.module";
import { QuestionsModule } from "./questions/questions.module";
import { ProfileModule } from "./profile/profile.module";
import { ChatModule } from "./chat/schema/chat.module";
import { ChapterAiModule } from "./chapter-ai/chapter-ai.module";

@Module({
  imports: [
    // 🔥 TEMP FIX (hardcoded Mongo URI)
    MongooseModule.forRoot(
      "mongodb+srv://rajatsonisoni77_db_user:YOUR_NEW_PASSWORD@cluster0.hysct9e.mongodb.net/exambook?retryWrites=true&w=majority",
    ),

    UsersModule,
    AuthModule,
    TokensModule,
    AiModule,
    BoardsModule,
    ClassesModule,
    SubjectsModule,
    ChaptersModule,
    QuestionsModule,
    ProfileModule,
    ChatModule,
    ChapterAiModule,
  ],
})
export class AppModule {}
