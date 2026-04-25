import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type TestDocument = Test & Document;

@Schema({ timestamps: true })
export class Test {
  @Prop({ type: Types.ObjectId, ref: "Board", required: true })
  boardId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "ClassModel", required: true })
  classId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Subject", required: true })
  subjectId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Chapter", required: true, unique: true })
  chapterId!: Types.ObjectId;

  @Prop({ required: true })
  language!: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
