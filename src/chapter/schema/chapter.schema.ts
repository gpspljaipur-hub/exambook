import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type ChapterDocument = Chapter & Document;

@Schema({ timestamps: true })
export class Chapter {
  @Prop({ required: true })
  name!: string;

  @Prop({ type: Types.ObjectId, ref: "Subject", required: true })
  subjectId!: Types.ObjectId;
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
