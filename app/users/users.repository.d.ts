import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
export declare class UsersRepository {
    private repository;
    constructor(repository: Repository<UserEntity>);
    create(entity: UserEntity): Promise<UserEntity>;
}
