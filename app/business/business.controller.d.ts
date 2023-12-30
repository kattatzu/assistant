import { CreateBusinessDto } from './dtos/create-business.dto';
import { BusinessService } from './business.service';
import { Business } from './business';
import { PaginatedResultDto } from '../../core/entities/paginated-result.dto';
import { FilterAndSortDto } from '../../core/entities/filter-and-sort';
import { UpdateBusinessDto } from './dtos/update-business.dto';
export declare class BusinessController {
    private service;
    constructor(service: BusinessService);
    search(filterAndSortDto?: FilterAndSortDto): Promise<PaginatedResultDto<Business>>;
    findById(id: string): Promise<Business>;
    create(dto: CreateBusinessDto): Promise<Business>;
    update(id: string, dto: UpdateBusinessDto): Promise<Business>;
}
