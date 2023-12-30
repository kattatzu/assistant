import { HealthCheckService, MemoryHealthIndicator } from '@nestjs/terminus';
export declare class HealthController {
    private health;
    private memory;
    constructor(health: HealthCheckService, memory: MemoryHealthIndicator);
    healthCheck(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
