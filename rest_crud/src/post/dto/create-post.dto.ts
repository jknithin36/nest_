import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'title is required' })
  @IsString({ message: 'Title Must be astring' })
  title: string;
}
