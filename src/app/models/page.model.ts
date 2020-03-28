export class Page<T> {

    content: T[];

    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    first: boolean;
    number: number;
    size: number;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    };
    empty: boolean;

    constructor(parameters: {
        content: T[],
        totalPages: number,
        totalElements: number,
        last: boolean,
        numberOfElements: number,
        first: boolean,
        number: number,
        size: number,
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean;
        },
        empty: boolean;
    }) {
       this.content = parameters.content;
       this.totalPages = parameters.totalPages;
       this.totalElements = parameters.totalElements;
       this.last = parameters.last;
       this.numberOfElements = parameters.numberOfElements;
       this.first = parameters.first;
       this.number = parameters.number;
       this.size = parameters.size;
       this.sort = parameters.sort;
       this.empty = parameters.empty;  
    }
}