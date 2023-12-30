import { MapperBase } from '../../core/base/mapper.base';
import { UserEntity } from './user.entity';
import { User } from './user';
export declare class UsersMapper extends MapperBase<UserEntity, User> {
    toEntity(model: User): UserEntity;
    toModel(entity: UserEntity): User;
}
