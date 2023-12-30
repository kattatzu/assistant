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
exports.BusinessEntity = void 0;
const typeorm_1 = require("typeorm");
const agent_entity_1 = require("../agents/agent.entity");
let BusinessEntity = class BusinessEntity {
    static table = 'business';
    id;
    name;
    email;
    agents;
};
exports.BusinessEntity = BusinessEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BusinessEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinessEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], BusinessEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_) => agent_entity_1.AgentEntity, (agent) => agent.business),
    __metadata("design:type", Array)
], BusinessEntity.prototype, "agents", void 0);
exports.BusinessEntity = BusinessEntity = __decorate([
    (0, typeorm_1.Entity)(BusinessEntity.table)
], BusinessEntity);
//# sourceMappingURL=business.entity.js.map