"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const hello_service_1 = require("../hello/hello.service");
let UserService = class UserService {
    helloService;
    constructor(helloService) {
        this.helloService = helloService;
    }
    getAllUsers() {
        return [
            { id: 1, name: 'Nithin' },
            { id: 2, name: 'Varun' },
            { id: 3, name: 'phani' },
        ];
    }
    getUserById(id) {
        const user = this.getAllUsers().find((user) => user.id === id);
        return user;
    }
    getWelcomeMessage(userId) {
        const user = this.getUserById(userId);
        if (!user) {
            return 'user Not Found!';
        }
        return this.helloService.getHello(user.name);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hello_service_1.HelloService])
], UserService);
//# sourceMappingURL=user.service.js.map