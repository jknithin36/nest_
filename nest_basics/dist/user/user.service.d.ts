import { HelloService } from "../hello/hello.service";
export declare class UserService {
    private readonly helloService;
    constructor(helloService: HelloService);
    getAllUsers(): {
        id: number;
        name: string;
    }[];
    getUserById(id: number): {
        id: number;
        name: string;
    } | undefined;
    getWelcomeMessage(userId: number): string;
}
