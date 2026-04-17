import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type ClassDocument = ClassModel & Document;

@Schema({ timestamps: true })
export class ClassModel {
  @Prop({ required: true })
  name!: string;

  @Prop({ type: Types.ObjectId, ref: "Board", required: true })
  boardId!: Types.ObjectId;
}

export const ClassSchema = SchemaFactory.createForClass(ClassModel);
