import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import * as postInterface from './interface/post.interface';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(@Query('search') search?: string): postInterface.Post[] {
    const extraclAllPosts = this.postService.findAll();
    if (search) {
      return extraclAllPosts.filter((singlePost) =>
        singlePost.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return extraclAllPosts;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): postInterface.Post {
    return this.postService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() createPostData: Omit<postInterface.Post, 'id' | 'createdAt'>,
  ): postInterface.Post {
    return this.postService.crateOne(createPostData);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updatePostData: Partial<Omit<postInterface.Post, 'id' | 'createdAt'>>,
  ): postInterface.Post {
    return this.postService.updateOne(id, updatePostData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.postService.remove(id);
  }
}
