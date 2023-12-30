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
exports.AgentEntity = void 0;
const typeorm_1 = require("typeorm");
const business_entity_1 = require("../business/business.entity");
let AgentEntity = class AgentEntity {
    static table = 'agents';
    id;
    name;
    businessId;
    description;
    setupPrompt;
    business;
};
exports.AgentEntity = AgentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AgentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AgentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'business_id' }),
    __metadata("design:type", String)
], AgentEntity.prototype, "businessId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AgentEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'setup_prompt', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AgentEntity.prototype, "setupPrompt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_entity_1.BusinessEntity, (business) => business.agents),
    (0, typeorm_1.JoinColumn)({ name: 'business_id' }),
    __metadata("design:type", business_entity_1.BusinessEntity)
], AgentEntity.prototype, "business", void 0);
exports.AgentEntity = AgentEntity = __decorate([
    (0, typeorm_1.Entity)(AgentEntity.table)
], AgentEntity);
//# sourceMappingURL=agent.entity.js.map