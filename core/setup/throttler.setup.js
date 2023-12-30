"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupThrottler = void 0;
const throttler_1 = require("@nestjs/throttler");
const config_1 = require("@nestjs/config");
const setupThrottler = () => throttler_1.ThrottlerModule.forRootAsync({
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (config) => [
        {
            ttl: config.get('THROTTLE_TTL'),
            limit: config.get('THROTTLE_LIMIT'),
        },
    ],
});
exports.setupThrottler = setupThrottler;
//# sourceMappingURL=throttler.setup.js.map