"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupVersioning = void 0;
const version_type_enum_1 = require("@nestjs/common/enums/version-type.enum");
const setupVersioning = (app) => app.enableVersioning({
    type: version_type_enum_1.VersioningType.URI,
    defaultVersion: '1',
});
exports.setupVersioning = setupVersioning;
//# sourceMappingURL=versioning.setup.js.map