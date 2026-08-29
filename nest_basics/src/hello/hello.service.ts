import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(name: string = 'world'): string {
    return `Hello  ${name}  `;
  }
}
