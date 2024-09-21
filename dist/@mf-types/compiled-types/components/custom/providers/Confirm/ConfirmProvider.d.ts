import { ConfirmType } from "../../../../utilities/store";
declare const ConfirmProvider: ({ children }: {
    children?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default ConfirmProvider;
export declare const useConfirm: () => {
    open: (args: ConfirmType) => Promise<unknown>;
};
