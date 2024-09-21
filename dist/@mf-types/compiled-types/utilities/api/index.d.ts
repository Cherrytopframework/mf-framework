declare const paths: {
    example: string;
    notionTest: string;
    schema: string;
    database: string;
    chat: string;
    generateImage: string;
    ocr: string;
    portfolio: string;
    notion: string;
    graphql: string;
    host: string;
};
declare const client: import("axios").AxiosInstance;
declare const queries: {
    query: (queryPath: string, payload?: any, method?: string) => {
        queryKey: string[];
        queryFn: () => Promise<any>;
    };
    graphQuery: (queryPath: string, payload?: any, method?: string) => {
        queryKey: string[];
        queryFn: () => Promise<any>;
    };
};
export { client, paths, queries };
