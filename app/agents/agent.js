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
exports.Agent = void 0;
const swagger_1 = require("@nestjs/swagger");
class Agent {
    id;
    name;
    businessId;
    description;
    setupPrompt;
    static fromRegisterRequest(request) {
        const model = new Agent();
        model.name = request.name;
        model.businessId = request.businessId;
        model.description = request.description;
        model.setupPrompt = request.setupPrompt;
        return model;
    }
    static fromUpdateRequest(request) {
        const model = new Agent();
        model.name = request.name;
        model.description = request.description;
        model.setupPrompt = request.setupPrompt;
        return model;
    }
}
exports.Agent = Agent;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id único del agente',
        example: '6abbdd24-fdc3-48ce-ad34-b99c735ced12',
    }),
    __metadata("design:type", String)
], Agent.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del agente',
        example: 'Mery',
    }),
    __metadata("design:type", String)
], Agent.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id único del business',
        example: '6abbdd24-fdc3-48ce-ad34-b99c735ced12',
    }),
    __metadata("design:type", String)
], Agent.prototype, "businessId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del agente',
        example: 'Agente de ventas para el área de cursos en línea.',
    }),
    __metadata("design:type", String)
], Agent.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Prompt del agente',
        example: 'Eres un Agente de Ventas de nuestra empresa Acme S.A....',
    }),
    __metadata("design:type", String)
], Agent.prototype, "setupPrompt", void 0);
//# sourceMappingURL=agent.js.map