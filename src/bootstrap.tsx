import React from 'react';
import { createRoot } from 'react-dom/client';
// @ts-ignore
import AuthProvider from 'mf2/AuthProvider';
// @ts-ignore
import Providers from 'mf2/AppProvider';
// @ts-ignore
import { useSupabaseStore, useSharedStore, useUtilityStore } from 'mf2/utilities/store';
// // @ts-ignore
// import { useSharedStore } from 'mf2/utilities/store/sharedStore';
import AppRouter from './components/routes/Router';
// import Entry from './Entry';


const StoresProvider = ({ children }: { children: (stores: any) => JSX.Element }) => {
    const supabaseStore = useSupabaseStore();
    const utilityStore = useUtilityStore();
    // sharedStore is instantiated and referenced from the AppRouter context
    // ... being passed into the mfe's
    const sharedStore = useSharedStore();
    return children({ supabaseStore, sharedStore, utilityStore });
};
// Whenever a microfrontend needs to use a store, it should be called at the root and passed
// to the microfrontend as props (can also make a copy of the store in a local store to access normally).
// StoresProvider > AuthProvider > Providers > AppRouter
// 1. Get the required stores from the shell
// 2. Pass the stores to the AuthProvider (Will handle authentication and save the user data in the store)
// 3. Wrap the app Providers with the AuthProvider to provide app level authentication
// 4. Pass the stores to the AppRouter
const root = createRoot(document.getElementById('root')!);
// root.render(<Entry />);
root.render(
    <React.StrictMode>
        <StoresProvider>
            {(stores) => stores && (
                <AuthProvider 
                    stores={stores} 
                    authProps={(props: any) => console.logs("AuthProvider.authProps: ", props)} 
                    onSubmit={(data: any) => console.logs("AuthProvider.onSubmit: ", data)}
                >
                    <Providers path={({ appConfig }: { appConfig: string }) => appConfig}>
                        {(response: any) => response && <AppRouter stores={stores} data={response} />}
                    </Providers>
                </AuthProvider>
            )}
        </StoresProvider>
    </React.StrictMode>
);