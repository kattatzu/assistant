import { Business } from './business';
import { BusinessEntity } from './business.entity';
import { MapperBase } from '../../core/base/mapper.base';
export declare class BusinessMapper extends MapperBase<BusinessEntity, Business> {
    toModel(entity: BusinessEntity): Business;
    toEntity(model: Business): BusinessEntity;
}
