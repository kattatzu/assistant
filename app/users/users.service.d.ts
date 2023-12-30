import { UsersRepository } from './users.repository';
import { UsersMapper } from './users.mapper';
import { User } from './user';
export declare class UsersService {
    private readonly repository;
    protected readonly mapper: UsersMapper;
    constructor(repository: UsersRepository);
    create(model: User): Promise<User>;
}
