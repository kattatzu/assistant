import { CreateAgentDto } from './dtos/create-agent.dto';
import { UpdateAgentDto } from './dtos/update-agent.dto';
export declare class Agent {
    id: string;
    name: string;
    businessId: string;
    description?: string;
    setupPrompt?: string;
    static fromRegisterRequest(request: CreateAgentDto): Agent;
    static fromUpdateRequest(request: UpdateAgentDto): Agent;
}
