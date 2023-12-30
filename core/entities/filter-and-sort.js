"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterAndSortDto = exports.FilterOperation = exports.buildCondition = exports.findWithFiltersAndSort = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const findWithFiltersAndSort = async (filterAndSortDto, queryBuilder) => {
    if (Array.isArray(filterAndSortDto.filterGroups)) {
        filterAndSortDto.filterGroups.forEach((group) => {
            group.filters.forEach((filter) => {
                const condition = (0, exports.buildCondition)(filter);
                queryBuilder.andWhere(condition.query, condition.parameters);
            });
        });
        filterAndSortDto.sort?.forEach((sort) => {
            queryBuilder.addOrderBy(`${sort.field}`, sort.order);
        });
    }
    filterAndSortDto.page = filterAndSortDto.page ?? 1;
    filterAndSortDto.rows = filterAndSortDto.rows ?? 25;
    const offset = (filterAndSortDto.page - 1) * filterAndSortDto.rows;
    queryBuilder.skip(offset).take(filterAndSortDto.rows);
    return queryBuilder.getMany();
};
exports.findWithFiltersAndSort = findWithFiltersAndSort;
const buildCondition = (filter) => {
    let query = `${filter.field}`;
    let parameters = {};
    switch (filter.operation) {
        case FilterOperation.EQUAL:
            query += ' = :value';
            parameters = { value: filter.values[0] };
            break;
        case FilterOperation.NOT_EQUAL:
            query += ' <> :value';
            parameters = { value: filter.values[0] };
            break;
        case FilterOperation.GREATER_THAN:
            query += ' > :value';
            parameters = { value: filter.values[0] };
            break;
        case FilterOperation.LESS_THAN:
            query += ' < :value';
            parameters = { value: filter.values[0] };
            break;
        case FilterOperation.GREATER_THAN_OR_EQUAL:
            query += ' >= :value';
            parameters = { value: filter.values[0] };
            break;
        case FilterOperation.LESS_THAN_OR_EQUAL:
            query += ' <= :value';
            parameters = { value: filter.values[0] };
            break;
        case FilterOperation.IN:
            query += ' IN (:...values)';
            parameters = { values: filter.values };
            break;
        case FilterOperation.NOT_IN:
            query += ' NOT IN (:...values)';
            parameters = { values: filter.values };
            break;
        case FilterOperation.BETWEEN:
            query += ' BETWEEN :value1 and :value2';
            parameters = { value1: filter.values[0], value2: filter.values[1] };
            break;
        case FilterOperation.IS_NULL:
            query += ' IS NULL';
            break;
        case FilterOperation.IS_NOT_NULL:
            query += ' IS NOT NULL';
            break;
        case FilterOperation.LIKE:
            query += ' ILIKE :value';
            parameters = { value: `%${filter.values[0]}%` };
            break;
        case FilterOperation.NOT_LIKE:
            query += ' NOT ILIKE :value';
            parameters = { value: `%${filter.values[0]}%` };
            break;
    }
    return { query, parameters };
};
exports.buildCondition = buildCondition;
var FilterOperation;
(function (FilterOperation) {
    FilterOperation["EQUAL"] = "EQUAL";
    FilterOperation["NOT_EQUAL"] = "NOT_EQUAL";
    FilterOperation["GREATER_THAN"] = "GREATER_THAN";
    FilterOperation["LESS_THAN"] = "LESS_THAN";
    FilterOperation["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    FilterOperation["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
    FilterOperation["IN"] = "IN";
    FilterOperation["NOT_IN"] = "NOT_IN";
    FilterOperation["BETWEEN"] = "BETWEEN";
    FilterOperation["IS_NULL"] = "IS_NULL";
    FilterOperation["IS_NOT_NULL"] = "IS_NOT_NULL";
    FilterOperation["LIKE"] = "LIKE";
    FilterOperation["NOT_LIKE"] = "NOT_LIKE";
})(FilterOperation || (exports.FilterOperation = FilterOperation = {}));
class FilterCriteria {
    field;
    operation;
    values;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FilterCriteria.prototype, "field", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(FilterOperation),
    __metadata("design:type", String)
], FilterCriteria.prototype, "operation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], FilterCriteria.prototype, "values", void 0);
class FilterGroup {
    filters;
    conjunction = 'AND';
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FilterCriteria),
    (0, swagger_1.ApiProperty)({ description: 'Filtros' }),
    __metadata("design:type", Array)
], FilterGroup.prototype, "filters", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Conjunción' }),
    __metadata("design:type", String)
], FilterGroup.prototype, "conjunction", void 0);
class FilterAndSortDto {
    filterGroups;
    sort;
    page = 1;
    rows = 10;
}
exports.FilterAndSortDto = FilterAndSortDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FilterGroup),
    (0, swagger_1.ApiProperty)({ description: 'Criterios de filtros' }),
    __metadata("design:type", Array)
], FilterAndSortDto.prototype, "filterGroups", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SortCriteria),
    (0, swagger_1.ApiProperty)({ description: 'Criterios de ordenamiento' }),
    __metadata("design:type", Array)
], FilterAndSortDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({ description: 'Número de página a obtener' }),
    __metadata("design:type", Number)
], FilterAndSortDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({ description: 'Cantidad de resultados por página' }),
    __metadata("design:type", Number)
], FilterAndSortDto.prototype, "rows", void 0);
class SortCriteria {
    field;
    order;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Campo a ordenar' }),
    __metadata("design:type", String)
], SortCriteria.prototype, "field", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Ordenamiento' }),
    __metadata("design:type", String)
], SortCriteria.prototype, "order", void 0);
//# sourceMappingURL=filter-and-sort.js.map