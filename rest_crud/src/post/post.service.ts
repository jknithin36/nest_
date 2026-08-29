import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './interface/post.interface';

@Injectable()
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'First Post',
      content: 'My First Post....',
      author: 'Nithin',
      createdAt: new Date(),
    },
  ];

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    const singlePost = this.posts.find((p) => p.id === id);
    if (!singlePost) {
      throw new NotFoundException(`Post with ${id} is not found`);
    }

    return singlePost;
  }

  crateOne(createPostData: Omit<Post, 'id' | 'createdAt'>): Post {
    const newpost = {
      id: this.getNextId(),
      ...createPostData,
      createdAt: new Date(),
    };
    this.posts.push(newpost);

    return newpost;
  }

  updateOne(
    id: number,
    updatePostData: Partial<Omit<Post, 'id' | 'createdAt'>>,
  ): Post {
    const currentPostIndexToEdit = this.posts.findIndex((i) => i.id === id);
    if (currentPostIndexToEdit === -1) {
      throw new NotFoundException(`Post with ${id} is not found`);
    }

    this.posts[currentPostIndexToEdit] = {
      ...this.posts[currentPostIndexToEdit],
      ...updatePostData,
      updatedAt: new Date(),
    };

    return this.posts[currentPostIndexToEdit];
  }

  remove(id: number): { message: string } {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException(`Post with ${id} is not found`);
    }

    this.posts.splice(postIndex, 1);

    return { message: 'Post Deleted' };
  }

  private getNextId(): number {
    return this.posts.length > 0
      ? Math.max(...this.posts.map((post) => post.id)) + 1
      : 1;
  }
}
