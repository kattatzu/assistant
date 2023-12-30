"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessMapper = void 0;
const business_1 = require("./business");
const business_entity_1 = require("./business.entity");
const mapper_base_1 = require("../../core/base/mapper.base");
class BusinessMapper extends mapper_base_1.MapperBase {
    toModel(entity) {
        const business = new business_1.Business();
        business.id = entity.id;
        business.email = entity.email;
        business.name = entity.name;
        return business;
    }
    toEntity(model) {
        const entity = new business_entity_1.BusinessEntity();
        entity.email = model.email;
        entity.name = model.name;
        return entity;
    }
}
exports.BusinessMapper = BusinessMapper;
//# sourceMappingURL=business.mapper.js.map