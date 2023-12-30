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
exports.BusinessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_business_dto_1 = require("./dtos/create-business.dto");
const business_service_1 = require("./business.service");
const business_1 = require("./business");
const paginated_result_dto_1 = require("../../core/entities/paginated-result.dto");
const filter_and_sort_1 = require("../../core/entities/filter-and-sort");
const update_business_dto_1 = require("./dtos/update-business.dto");
const firebase_auth_guard_1 = require("../../core/auth/firebase-auth.guard");
let BusinessController = class BusinessController {
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
        return this.service.create(business_1.Business.fromRegisterRequest(dto));
    }
    async update(id, dto) {
        await this.service.update(id, business_1.Business.fromUpdateRequest(dto));
        return this.findById(id);
    }
};
exports.BusinessController = BusinessController;
__decorate([
    (0, common_1.Post)('search'),
    (0, swagger_1.ApiBody)({ type: (paginated_result_dto_1.PaginatedResultDto) }),
    (0, swagger_1.ApiBody)({ type: filter_and_sort_1.FilterAndSortDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_and_sort_1.FilterAndSortDto]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_business_dto_1.CreateBusinessDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: business_1.Business,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.CreateBusinessDto]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBody)({ type: update_business_dto_1.UpdateBusinessDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_dto_1.UpdateBusinessDto]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "update", null);
exports.BusinessController = BusinessController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('Business'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(firebase_auth_guard_1.FirebaseAuthGuard),
    __metadata("design:paramtypes", [business_service_1.BusinessService])
], BusinessController);
//# sourceMappingURL=business.controller.js.map