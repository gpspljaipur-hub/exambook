import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Test, TestSchema } from "./schema/test.schema";
import { TestsService } from "./tests.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
  providers: [TestsService],
  exports: [TestsService],
})
export class TestsModule {}
