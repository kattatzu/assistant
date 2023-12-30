import { SelectQueryBuilder } from 'typeorm';
export declare const findWithFiltersAndSort: (filterAndSortDto: FilterAndSortDto, queryBuilder: SelectQueryBuilder<any>) => Promise<any[]>;
export declare const buildCondition: (filter: FilterCriteria) => {
    query: string;
    parameters: any;
};
export declare enum FilterOperation {
    EQUAL = "EQUAL",
    NOT_EQUAL = "NOT_EQUAL",
    GREATER_THAN = "GREATER_THAN",
    LESS_THAN = "LESS_THAN",
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL",
    IN = "IN",
    NOT_IN = "NOT_IN",
    BETWEEN = "BETWEEN",
    IS_NULL = "IS_NULL",
    IS_NOT_NULL = "IS_NOT_NULL",
    LIKE = "LIKE",
    NOT_LIKE = "NOT_LIKE"
}
declare class FilterCriteria {
    field: string;
    operation: FilterOperation;
    values?: any[];
}
declare class FilterGroup {
    filters: FilterCriteria[];
    conjunction: 'AND' | 'OR';
}
export declare class FilterAndSortDto {
    filterGroups: FilterGroup[];
    sort?: SortCriteria[];
    page: number;
    rows: number;
}
declare class SortCriteria {
    field: string;
    order: 'ASC' | 'DESC';
}
export {};
