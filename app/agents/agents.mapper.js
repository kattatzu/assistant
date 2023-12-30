"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsMapper = void 0;
const mapper_base_1 = require("../../core/base/mapper.base");
const agent_entity_1 = require("./agent.entity");
const agent_1 = require("./agent");
class AgentsMapper extends mapper_base_1.MapperBase {
    toEntity(model) {
        const entity = new agent_entity_1.AgentEntity();
        entity.id = model.id;
        entity.name = model.name;
        entity.businessId = model.businessId;
        entity.description = model.description;
        entity.setupPrompt = model.setupPrompt;
        return entity;
    }
    toModel(entity) {
        const model = new agent_1.Agent();
        model.id = entity.id;
        model.name = entity.name;
        model.businessId = entity.businessId;
        model.description = entity.description;
        model.setupPrompt = entity.setupPrompt;
        return model;
    }
}
exports.AgentsMapper = AgentsMapper;
//# sourceMappingURL=agents.mapper.js.map