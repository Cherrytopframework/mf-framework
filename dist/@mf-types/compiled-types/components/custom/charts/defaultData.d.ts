declare const defaults: {
    bar: {
        series: {
            data: number[];
        }[];
        xAxis: {
            data: string[];
            scaleType: string;
        }[];
    };
    line: {
        series: {
            data: number[];
        }[];
        xAxis: {
            data: number[];
        }[];
    };
    pie: {
        data: {
            id: number;
            value: number;
            label: string;
        }[];
    };
};
declare const rows: {
    id: number;
    col1: string;
    col2: string;
}[];
declare const columns: {
    field: string;
    headerName: string;
    width: number;
}[];
export { defaults, rows, columns };
