"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTypeORM = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const setupTypeORM = () => {
    return typeorm_1.TypeOrmModule.forRootAsync({
        imports: [config_1.ConfigModule],
        inject: [config_1.ConfigService],
        useFactory: (config) => ({
            type: 'postgres',
            host: config.get('POSTGRES_HOST', 'localhost'),
            port: config.get('POSTGRES_PORT', 5432),
            username: config.get('POSTGRES_USERNAME', 'postgres'),
            password: config.get('POSTGRES_PASSWORD', 'password123'),
            database: config.get('POSTGRES_DATABASE', 'assistant'),
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
            logging: false,
        }),
    });
};
exports.setupTypeORM = setupTypeORM;
//# sourceMappingURL=typeorm.setup.js.map