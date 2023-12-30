"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_setup_1 = require("../core/setup/config.setup");
const typeorm_setup_1 = require("../core/setup/typeorm.setup");
const throttler_setup_1 = require("../core/setup/throttler.setup");
const health_module_1 = require("./health/health.module");
const site_setup_1 = require("../core/setup/site.setup");
const business_module_1 = require("./business/business.module");
const agents_module_1 = require("./agents/agents.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, config_setup_1.setupConfig)(),
            (0, typeorm_setup_1.setupTypeORM)(),
            (0, throttler_setup_1.setupThrottler)(),
            (0, site_setup_1.setupSite)(),
            health_module_1.HealthModule,
            business_module_1.BusinessModule,
            agents_module_1.AgentsModule,
            users_module_1.UsersModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map