interface AlertType {
    severity: "success" | "error" | "warning" | "info";
    message: string;
    open: boolean;
}
interface ConfirmType {
    open: boolean;
    title?: string;
    message?: string;
    severity?: "success" | "error" | "warning" | "info";
    continueText?: string;
    cancelText?: string;
    onConfirm?: (answer: boolean, resolve?: (value: boolean | PromiseLike<boolean>) => void) => void | Promise<void>;
    onCancel?: (answer: boolean) => void;
}
interface DrawerType {
    children?: any;
    anchor?: "left" | "right" | "top" | "bottom";
    open?: boolean;
    content?: any;
    onOpen?: (cb: () => void) => void;
    onClose?: (cb: () => void) => void;
}
interface UtilityStoreType {
    confirm: ConfirmType;
    setConfirm: (confirm: UtilityStoreType["confirm"]) => void;
    clearConfirm: () => void;
    colorMode: "light" | "dark";
    setColorMode: (colorMode: UtilityStoreType["colorMode"]) => void;
    alert: AlertType;
    setAlert: (alert: UtilityStoreType["alert"]) => void;
    createAlert: (severity: string, message: string) => void;
    drawer: DrawerType;
    setDrawer: (drawer: UtilityStoreType["drawer"]) => void;
}
declare const useUtilityStore: import("zustand").UseBoundStore<import("zustand").StoreApi<UtilityStoreType>>;
export default useUtilityStore;
export { useUtilityStore };
export type { UtilityStoreType, AlertType, ConfirmType, DrawerType };
