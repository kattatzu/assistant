import { UsersService } from './users.service';
import { User } from './user';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    create(request: any): Promise<User>;
}
