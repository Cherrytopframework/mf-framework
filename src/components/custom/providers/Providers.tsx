import React from 'react'
import AlertProvider from './AlertProvider'
import { ConfirmProvider } from './Confirm'
import { ThemeProvider } from '../../../utilities/theme'
import QueryWrapper from '../wrappers/QueryWrapper/QueryWrapper'


const Providers = (
    { children, path }: 
    { 
        children: (callback?: { data: any }) => React.ReactNode
        path?: (paths: any) => string | boolean,
    }
) => {
    const handlePath = (paths: any) => path ? path(paths) : "";
    return (
        <ThemeProvider>
            {((typeof(path) === "boolean") && !path)
                ? children()
                : (
                    <QueryWrapper path={handlePath as (paths: any) => string}>
                        {({ data }) => children(data)}
                    </QueryWrapper>
                )
            }
            <AlertProvider />
            <ConfirmProvider />
        </ThemeProvider>
    )
}

export default Providers
export type Providers = ReturnType<typeof Providers>