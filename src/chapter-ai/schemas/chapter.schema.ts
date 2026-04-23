// src/chapter-ai/schemas/chapter-content.schema.ts

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";

export type ChapterContentDocument = ChapterContent & Document;

@Schema({ timestamps: true })
export class ChapterContent {
  @Prop({ type: Types.ObjectId, ref: "Board", required: true })
  boardId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "ClassModel", required: true })
  classId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Subject", required: true })
  subjectId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Chapter", unique: true })
  chapterId!: Types.ObjectId;

  @Prop() chapterName!: string;
  @Prop() introduction!: string;

  @Prop({ type: Array }) theory!: any[];
  @Prop({ type: Array }) formulas!: any[];

  @Prop([String]) importantPoints!: string[];
  @Prop({ type: Array }) examples!: any[];

  @Prop({ type: Array }) mcqs!: any[];
  @Prop({ type: Array }) shortQuestions!: any[];
  @Prop({ type: Array }) longQuestions!: any[];

  @Prop([String]) revisionNotes!: string[];

  @Prop() difficulty!: string;
  @Prop() estimatedTime!: string;
}

export const ChapterContentSchema =
  SchemaFactory.createForClass(ChapterContent);
