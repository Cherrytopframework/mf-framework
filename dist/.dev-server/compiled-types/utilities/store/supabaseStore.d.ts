interface SupabaseUser {
    id: string;
    email: string;
    app_metadata: {
        provider: string;
    };
    user_metadata: {
        name: string;
    };
}
interface SupabaseSession {
    access_token: string;
    token_type: string;
    user: SupabaseUser;
}
interface SupabaseStore {
    session: SupabaseSession | null;
    userType: "admin" | "guest" | null;
    setUserType: (userType: "admin" | "guest" | null) => void;
    setSession: (session: SupabaseSession | null) => void;
}
declare const useSupabaseStore: import("zustand").UseBoundStore<import("zustand").StoreApi<SupabaseStore>>;
export { useSupabaseStore };
export type { SupabaseStore, SupabaseUser, SupabaseSession };
