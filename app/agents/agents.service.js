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
exports.AgentsService = void 0;
const common_1 = require("@nestjs/common");
const agents_mapper_1 = require("./agents.mapper");
const agents_repository_1 = require("./agents.repository");
let AgentsService = class AgentsService {
    repository;
    mapper = new agents_mapper_1.AgentsMapper();
    constructor(repository) {
        this.repository = repository;
    }
    findById(id) {
        return this.repository.findById(id).then((e) => {
            if (!e) {
                throw new common_1.NotFoundException('Agent not found');
            }
            return this.mapper.toModel(e);
        });
    }
    searchPaginated(filterAndSortDto) {
        return this.repository
            .findPaginated(filterAndSortDto)
            .then((res) => this.mapper.paginated(res));
    }
    async update(id, model) {
        const res = await this.repository.update(id, this.mapper.toEntity(model));
        return res.affected == 1;
    }
    create(model) {
        return this.repository
            .create(this.mapper.toEntity(model))
            .then((e) => this.mapper.toModel(e))
            .catch((ex) => {
            throw new common_1.BadRequestException(ex.message);
        });
    }
};
exports.AgentsService = AgentsService;
exports.AgentsService = AgentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [agents_repository_1.AgentsRepository])
], AgentsService);
//# sourceMappingURL=agents.service.js.map