import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ChatDocument = Chat & Document;

@Schema({ timestamps: true })
export class Chat {
  @Prop({ required: true })
  question!: string;

  @Prop({ required: true })
  answer!: string;

  @Prop({ required: true })
  userId!: string;
  @Prop()
  image?: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
