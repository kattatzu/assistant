import { PaginatedResultDto } from '../../core/entities/paginated-result.dto';
import { FilterAndSortDto } from '../../core/entities/filter-and-sort';
import { Agent } from './agent';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dtos/create-agent.dto';
import { UpdateAgentDto } from './dtos/update-agent.dto';
export declare class AgentsController {
    private service;
    constructor(service: AgentsService);
    search(filterAndSortDto?: FilterAndSortDto): Promise<PaginatedResultDto<Agent>>;
    findById(id: string): Promise<Agent>;
    create(dto: CreateAgentDto): Promise<Agent>;
    update(id: string, dto: UpdateAgentDto): Promise<Agent>;
}
