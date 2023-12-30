import { AgentEntity } from '../agents/agent.entity';
export declare class BusinessEntity {
    static readonly table = "business";
    id: string;
    name: string;
    email?: string;
    agents: AgentEntity[];
}
