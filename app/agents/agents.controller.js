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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paginated_result_dto_1 = require("../../core/entities/paginated-result.dto");
const filter_and_sort_1 = require("../../core/entities/filter-and-sort");
const agent_1 = require("./agent");
const agents_service_1 = require("./agents.service");
const create_agent_dto_1 = require("./dtos/create-agent.dto");
const update_agent_dto_1 = require("./dtos/update-agent.dto");
let AgentsController = class AgentsController {
    service;
    constructor(service) {
        this.service = service;
    }
    search(filterAndSortDto) {
        return this.service.searchPaginated(filterAndSortDto);
    }
    findById(id) {
        return this.service.findById(id);
    }
    create(dto) {
        return this.service.create(agent_1.Agent.fromRegisterRequest(dto));
    }
    async update(id, dto) {
        await this.service.update(id, agent_1.Agent.fromUpdateRequest(dto));
        return this.findById(id);
    }
};
exports.AgentsController = AgentsController;
__decorate([
    (0, common_1.Post)('search'),
    (0, swagger_1.ApiBody)({ type: (paginated_result_dto_1.PaginatedResultDto) }),
    (0, swagger_1.ApiBody)({ type: filter_and_sort_1.FilterAndSortDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Lista de agentes encontrados',
        type: (paginated_result_dto_1.PaginatedResultDto),
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_and_sort_1.FilterAndSortDto]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
        description: 'Obtiene los datos de un agente',
        type: agent_1.Agent,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgentsController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_agent_dto_1.CreateAgentDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'El agente fue registrado',
        type: agent_1.Agent,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agent_dto_1.CreateAgentDto]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBody)({ type: update_agent_dto_1.UpdateAgentDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'El agente fue actualizado',
        type: agent_1.Agent,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agent_dto_1.UpdateAgentDto]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "update", null);
exports.AgentsController = AgentsController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('Agents'),
    __metadata("design:paramtypes", [agents_service_1.AgentsService])
], AgentsController);
//# sourceMappingURL=agents.controller.js.map