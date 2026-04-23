import { IsMongoId } from "class-validator";

export class ChapterByIdDto {
  @IsMongoId()
  boardId!: string;

  @IsMongoId()
  classId!: string;

  @IsMongoId()
  subjectId!: string;

  @IsMongoId()
  chapterId!: string;
}
