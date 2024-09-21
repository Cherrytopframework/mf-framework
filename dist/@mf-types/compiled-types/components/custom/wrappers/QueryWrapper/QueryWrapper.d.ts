import { ReactNode } from 'react';
declare const QueryWrapper: ({ children, ...args }: {
    children: (data: any) => ReactNode;
    path: (paths: any) => string;
    options?: {
        method: string;
        payload?: any;
        graphql: boolean;
    };
}) => import("react/jsx-runtime").JSX.Element;
export default QueryWrapper;
