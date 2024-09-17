import axios from "axios";


// todo: write an npx command to add paths
const paths = {
    "example": "/example",
    "notionTest": "/notion/Home",
    "schema": '/database/api/read_schema',
    "database": '/database/',
    "chat": "/chat/generate",
    "generateImage": "/stability/generate",
    "ocr": "/camera/analyze-image",
    "portfolio": "/notion/portfolio",
    "notion": "/notion",
    "host": ("https://openfitness2.onrender.com") // || process.env.CLIENT_HOSTNAME),
};

const client = axios.create({
    // todo: capture CLIENT_HOSTNAME when using the setup script
    // baseURL: (process.env.CLIENT_HOSTNAME + "/api/v1"),
    baseURL: (paths.host + "/api/v1"),
    headers: {},
});

const graphClient = axios.create({
    baseURL: (paths.host + "/graphql"),
    headers: {},
});

// general app queries
const queries = ({
    // General Query to use any query with a passed queryPath
    query: (queryPath: string, payload?: any, method?: string) => ({
        queryKey: [queryPath],
        queryFn: async () => payload 
            ? (await (client as any)[method || "post"](queryPath, payload)).data
            : (await (client as any)[method || "get"](queryPath)).data
    }),
    graphQuery: (queryPath: string, payload?: any, method?: string) => ({
        queryKey: [queryPath],
        queryFn: async () => payload 
            ? (await (graphClient as any)[method || "post"](queryPath, payload)).data
            : (await (graphClient as any)[method || "get"](queryPath)).data
    }),
});

export { client, paths, queries };
