import React from 'react';
declare const Providers: ({ children, path }: {
    children: (callback?: {
        data: any;
    }) => React.ReactNode;
    path?: (paths: any) => string | boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default Providers;
export type Providers = ReturnType<typeof Providers>;
