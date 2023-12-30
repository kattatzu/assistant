import { BusinessRepository } from './business.repository';
import { Business } from './business';
import { FilterAndSortDto } from '../../core/entities/filter-and-sort';
import { BusinessMapper } from './business.mapper';
import { PaginatedResultDto } from '../../core/entities/paginated-result.dto';
export declare class BusinessService {
    private repository;
    protected readonly mapper: BusinessMapper;
    constructor(repository: BusinessRepository);
    findById(id: string): Promise<Business>;
    searchPaginated(filterAndSortDto?: FilterAndSortDto): Promise<PaginatedResultDto<Business>>;
    update(id: string, model: Business): Promise<boolean>;
    create(model: Business): Promise<Business>;
}
