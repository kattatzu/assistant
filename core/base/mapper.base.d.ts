import { PaginatedResultDto } from '../entities/paginated-result.dto';
export declare abstract class MapperBase<E, M> {
    paginated(res: [E[], number]): PaginatedResultDto<M>;
    abstract toModel(entity: E): M;
    abstract toEntity(model: M): E;
}
