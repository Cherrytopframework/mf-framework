interface ViewType {
    title: string;
}
interface AppStoreType {
    view: ViewType;
    setView: (view: AppStoreType["view"]) => void;
}
declare const useAppStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AppStoreType>>;
export { useAppStore };
export type { AppStoreType, ViewType };
