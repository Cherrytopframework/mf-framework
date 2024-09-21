interface FitnessStoreState {
    userID: string | null;
    isDrawerOpen: boolean;
    activeDrawer: 'food' | 'exercise' | 'weight' | 'profile' | 'sleep' | 'steps';
    drawerAnchor: 'left' | 'right' | 'bottom';
    selectedSearchItem: any;
    fitnessTables: Record<string, any>;
    activeSearchTab: 'recent' | 'favorites' | 'search';
    appConfig: any;
    registrationView: boolean;
    setRegistrationView: (registrationView: boolean) => void;
    setAppConfig: (appConfig: any) => void;
    setFitnessTables: (fitnessTables: Record<string, any>) => void;
    toggleDrawer: (options?: {
        open?: boolean;
        anchor?: 'left' | 'right' | 'bottom';
    } | boolean | null) => void;
    setActiveDrawer: (activeDrawer: string) => void;
    setSelectedSearchItem: (selectedSearchItem: any) => void;
    setActiveSearchTab: (activeSearchTab: 'recent' | 'favorites' | 'search') => void;
}
declare const useFitnessStore: import("zustand").UseBoundStore<import("zustand").StoreApi<FitnessStoreState>>;
export { useFitnessStore };
export type { FitnessStoreState };
