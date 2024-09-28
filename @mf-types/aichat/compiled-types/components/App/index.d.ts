import './App.css';
declare const App: ({ stores: { utilityStore, chatStore, sharedStore }, router }: {
    stores?: any;
    [key: string]: any;
}) => import("react/jsx-runtime").JSX.Element;
export default App;
