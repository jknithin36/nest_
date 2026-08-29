import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  // injecting services from another module
  constructor(private readonly helloService: HelloService) {}

  getAllUsers() {
    return [
      { id: 1, name: 'Nithin' },
      { id: 2, name: 'Varun' },
      { id: 3, name: 'phani' },
    ];
  }

  getUserById(id: number) {
    const user = this.getAllUsers().find((user) => user.id === id);
    return user;
  }
  // here we are using service from anaother modile
  getWelcomeMessage(userId: number) {
    const user = this.getUserById(userId);
    if (!user) {
      return 'user Not Found!';
    }
    return this.helloService.getHello(user.name);
  }
}
