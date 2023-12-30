"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const setupSwagger = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Business Assistant API Service')
        .setDescription('API Service for Business Assistant System')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.setup.js.map