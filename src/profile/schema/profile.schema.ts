import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type ProfileDocument = Profile & Document;

@Schema({ timestamps: true })
export class Profile {
  @Prop()
  fullName?: string;

  @Prop()
  email?: string;

  @Prop({ unique: true, sparse: true })
  mobile?: string;

  @Prop({ type: Types.ObjectId, ref: "Board", required: true })
  boardId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "ClassModel", required: true })
  classId!: Types.ObjectId;

  @Prop({ required: true })
  language!: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
