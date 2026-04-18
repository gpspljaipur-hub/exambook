import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { TokensModule } from "./tokens/tokens.module";
import { AiModule } from "./ai/ai.module";
import { ClassesModule } from "./classes/classes.module";
import { SubjectsModule } from "./subject/subjects.module";
import { BoardsModule } from "./board/boards.module";
import { ChaptersModule } from "./chapter/chapters.module";
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>("MONGO_URI"),
      }),
    }),
    UsersModule,
    AuthModule,
    TokensModule,
    AiModule,
    BoardsModule,
    ClassesModule,
    SubjectsModule,
    ChaptersModule,
  ],
})
export class AppModule {}
