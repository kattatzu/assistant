import { Repository, UpdateResult } from 'typeorm';
import { AgentEntity } from './agent.entity';
import { FilterAndSortDto } from '../../core/entities/filter-and-sort';
export declare class AgentsRepository {
    private repository;
    constructor(repository: Repository<AgentEntity>);
    findById(id: string): Promise<AgentEntity>;
    findPaginated(filterAndSortDto?: FilterAndSortDto): Promise<[AgentEntity[], number]>;
    create(entity: AgentEntity): Promise<AgentEntity>;
    update(id: string, entity: Partial<AgentEntity>): Promise<UpdateResult>;
}
