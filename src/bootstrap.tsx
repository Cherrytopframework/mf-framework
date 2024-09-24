import React from 'react';
import { createRoot } from 'react-dom/client';
import AuthProvider from 'mf2/AuthProvider';
import Providers from 'mf2/AppProvider';
import { useSupabaseStore } from 'mf2/utilities/store';
import AppRouter from './components/routes/Router';
// import Entry from './Entry';


const StoresProvider = ({ children }: { children: (stores: any) => JSX.Element }) => {
    const supabaseStore = useSupabaseStore();
    return children({supabaseStore});
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
                    authProps={(props) => console.log("AuthProvider.authProps: ", props)} 
                    onSubmit={(data) => console.log("AuthProvider.onSubmit: ", data)}
                >
                    <Providers path={({ appConfig }) => appConfig}>
                        {(response) => response && <AppRouter stores={stores} data={response} />}
                    </Providers>
                </AuthProvider>
            )}
        </StoresProvider>
    </React.StrictMode>
);