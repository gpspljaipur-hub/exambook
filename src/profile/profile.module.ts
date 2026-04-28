// import { Module } from "@nestjs/common";
// import { MongooseModule } from "@nestjs/mongoose";
// import { Profile, ProfileSchema } from "./schema/profile.schema";
// import { ProfileService } from "./profile.service";
// import { ProfileController } from "./profile.controller";

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
//   ],
//   providers: [ProfileService],
//   controllers: [ProfileController],
//   exports: [ProfileService],
// })
// export class ProfileModule {}

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Profile, ProfileSchema } from "./schema/profile.schema";

import { ProfileService } from "./profile.service";
import { ProfileController } from "./profile.controller";
import { User, UserSchema } from "../users/schema/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Profile.name, schema: ProfileSchema },
      { name: User.name, schema: UserSchema }, // ✅ ADD THIS
    ]),
  ],
  providers: [ProfileService],
  controllers: [ProfileController],
  exports: [ProfileService],
})
export class ProfileModule {}
