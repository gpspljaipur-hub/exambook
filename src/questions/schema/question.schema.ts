import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true })
  question!: string;

  @Prop({ type: [String], required: true })
  options!: string[];

  @Prop({ required: true })
  correctAnswer!: string;

  @Prop()
  explanation!: string;

  @Prop({ type: Types.ObjectId, ref: "Board" })
  boardId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "ClassModel" })
  classId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Subject" })
  subjectId!: Types.ObjectId;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
