import { BusinessEntity } from './business.entity';
import { Repository, UpdateResult } from 'typeorm';
import { FilterAndSortDto } from '../../core/entities/filter-and-sort';
export declare class BusinessRepository {
    private repository;
    constructor(repository: Repository<BusinessEntity>);
    findById(id: string): Promise<BusinessEntity>;
    findPaginated(filterAndSortDto?: FilterAndSortDto): Promise<[BusinessEntity[], number]>;
    create(entity: BusinessEntity): Promise<BusinessEntity>;
    update(id: string, entity: Partial<BusinessEntity>): Promise<UpdateResult>;
}
