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
exports.BusinessRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_entity_1 = require("./business.entity");
const typeorm_2 = require("typeorm");
const filter_and_sort_1 = require("../../core/entities/filter-and-sort");
let BusinessRepository = class BusinessRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    findById(id) {
        return this.repository.findOneBy({ id });
    }
    async findPaginated(filterAndSortDto) {
        const queryBuilder = this.repository.createQueryBuilder(business_entity_1.BusinessEntity.table);
        if (filterAndSortDto) {
            await (0, filter_and_sort_1.findWithFiltersAndSort)(filterAndSortDto, queryBuilder);
        }
        return queryBuilder.getManyAndCount();
    }
    create(entity) {
        return this.repository.save(entity);
    }
    update(id, entity) {
        return this.repository.update({ id }, entity);
    }
};
exports.BusinessRepository = BusinessRepository;
exports.BusinessRepository = BusinessRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(business_entity_1.BusinessEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BusinessRepository);
//# sourceMappingURL=business.repository.js.map