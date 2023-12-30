"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMapper = void 0;
const mapper_base_1 = require("../../core/base/mapper.base");
const user_entity_1 = require("./user.entity");
const user_1 = require("./user");
class UsersMapper extends mapper_base_1.MapperBase {
    toEntity(model) {
        const entity = new user_entity_1.UserEntity();
        entity.id = model.id;
        entity.name = model.name;
        entity.email = model.email;
        entity.picture = model.picture;
        return entity;
    }
    toModel(entity) {
        const model = new user_1.User();
        model.id = entity.id;
        model.name = entity.name;
        model.email = entity.email;
        model.picture = entity.picture;
        return model;
    }
}
exports.UsersMapper = UsersMapper;
//# sourceMappingURL=users.mapper.js.map