"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const swagger_setup_1 = require("./core/setup/swagger.setup");
const versioning_setup_1 = require("./core/setup/versioning.setup");
const firebase_auth_setup_1 = require("./core/setup/firebase-auth.setup");
async function bootstrap() {
    (0, firebase_auth_setup_1.setupFirebaseAuth)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    (0, versioning_setup_1.setupVersioning)(app);
    (0, swagger_setup_1.setupSwagger)(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map