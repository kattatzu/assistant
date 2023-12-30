import { BusinessEntity } from '../business/business.entity';
export declare class AgentEntity {
    static readonly table = "agents";
    id: string;
    name: string;
    businessId: string;
    description: string;
    setupPrompt: string;
    business: BusinessEntity;
}
