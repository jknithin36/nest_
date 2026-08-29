import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }
  @Get('user/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.helloService.getHello(name);
  }
  @Get('query')
  getHelloWothQuery(@Query('name') name: string): string {
    return this.helloService.getHello(name);
  }
}
