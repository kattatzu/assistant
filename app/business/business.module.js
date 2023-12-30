"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModule = void 0;
const common_1 = require("@nestjs/common");
const business_controller_1 = require("./business.controller");
const business_service_1 = require("./business.service");
const business_repository_1 = require("./business.repository");
const typeorm_1 = require("@nestjs/typeorm");
const business_entity_1 = require("./business.entity");
const core_1 = require("@nestjs/core");
let BusinessModule = class BusinessModule {
};
exports.BusinessModule = BusinessModule;
exports.BusinessModule = BusinessModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([business_entity_1.BusinessEntity]),
            core_1.RouterModule.register([
                {
                    path: 'business',
                    module: BusinessModule,
                },
            ]),
        ],
        controllers: [business_controller_1.BusinessController],
        providers: [business_service_1.BusinessService, business_repository_1.BusinessRepository],
    })
], BusinessModule);
//# sourceMappingURL=business.module.js.map