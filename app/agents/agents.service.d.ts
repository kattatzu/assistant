import { AgentsMapper } from './agents.mapper';
import { AgentsRepository } from './agents.repository';
import { Agent } from './agent';
import { FilterAndSortDto } from '../../core/entities/filter-and-sort';
import { PaginatedResultDto } from '../../core/entities/paginated-result.dto';
export declare class AgentsService {
    private repository;
    protected readonly mapper: AgentsMapper;
    constructor(repository: AgentsRepository);
    findById(id: string): Promise<Agent>;
    searchPaginated(filterAndSortDto?: FilterAndSortDto): Promise<PaginatedResultDto<Agent>>;
    update(id: string, model: Agent): Promise<boolean>;
    create(model: Agent): Promise<Agent>;
}
