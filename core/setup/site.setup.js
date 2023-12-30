"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSite = void 0;
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const setupSite = () => {
    return serve_static_1.ServeStaticModule.forRoot({
        rootPath: (0, path_1.join)(__dirname, '../../../site'),
    });
};
exports.setupSite = setupSite;
//# sourceMappingURL=site.setup.js.map