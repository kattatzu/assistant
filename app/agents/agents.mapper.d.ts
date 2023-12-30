import { MapperBase } from '../../core/base/mapper.base';
import { AgentEntity } from './agent.entity';
import { Agent } from './agent';
export declare class AgentsMapper extends MapperBase<AgentEntity, Agent> {
    toEntity(model: Agent): AgentEntity;
    toModel(entity: AgentEntity): Agent;
}
