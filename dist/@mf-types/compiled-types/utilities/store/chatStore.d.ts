interface ChatState {
    messages: any[];
    view: string;
    mode: string;
    imageSrc: string | string[] | null;
    imageClassification: string | null;
    drawerOpen: boolean;
    activeChat: any | null;
    activeChatId: string | null;
    visionMode: string;
    defaultModel: string;
    selectedOptionsTab: number;
    drawerView: string;
    chatStatus: string | null;
    inputMessage: string;
    mutationOptions: {
        method: string;
        endpoint: string;
        table: string;
    };
    toolsWindowDrawer: boolean;
    isInternetQuery: boolean;
    chatMode: '/create' | '/chat' | '/imagine' | '/internet';
    chatModes: string[];
    appContent: any | null;
    appConfig: any | null;
    cpxData: any | null;
    attachment: string | null;
    setAppContent: (appContent: any) => void;
    setCpxData: (cpxData: any) => void;
    setIsInternetQuery: (isInternetQuery: boolean) => void;
    setToolsWindowDrawer: (toolsWindowDrawer: boolean) => void;
    setMutationOptions: (mutationOptions: {
        method: string;
        endpoint: string;
        table: string;
    }) => void;
    handleInput: (inputMessage: string) => void;
    addMessage: (message: any) => void;
    setMessages: (messages: any[]) => void;
    handleView: (view: string) => void;
    handleMode: (mode: string) => void;
    handleImageSrc: (imageSrc: string | string[] | null) => void;
    handleImageClassification: (imageClassification: string | null) => void;
    handleDrawer: (open: boolean) => void;
    handleActiveChat: (chat: any) => void;
    handleActiveChatId: (chatId: string) => void;
    handleAttachment: (attachment: string) => void;
    toggleVisionMode: (visionMode: string) => void;
    setDrawerView: (drawerView: string) => void;
    setDefaultModel: (defaultModel: string) => void;
    handleSelectedOptionsTab: (value: number) => void;
    updateChatStatus: (status: string) => void;
    clearChat: () => void;
    setAppConfig: (appConfig: any) => void;
    setState: (state: any) => void;
}
export declare const useChatStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ChatState>>;
interface SupabaseStoreTypes {
    session: any;
    setSession: (session: any) => void;
}
export declare const useSupabaseStore: import("zustand").UseBoundStore<import("zustand").StoreApi<SupabaseStoreTypes>>;
export {};
