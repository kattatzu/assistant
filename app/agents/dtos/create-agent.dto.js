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
exports.CreateAgentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAgentDto {
    name;
    businessId;
    description;
    setupPrompt;
}
exports.CreateAgentDto = CreateAgentDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Mery',
        description: 'Nombre del Agente',
        required: true,
    }),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '6abbdd24-fdc3-48ce-ad34-b99c735ced12',
        description: 'Id único del business',
        required: true,
    }),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "businessId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del agente',
        example: 'Agente de ventas para el área de cursos en línea.',
    }),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Prompt del agente',
        example: 'Eres un Agente de Ventas de nuestra empresa Acme S.A....',
    }),
    __metadata("design:type", String)
], CreateAgentDto.prototype, "setupPrompt", void 0);
//# sourceMappingURL=create-agent.dto.js.map