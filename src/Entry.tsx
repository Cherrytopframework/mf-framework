// import MfeButton from 'mfe2/Button';
// @ts-ignore
import NoRemoteEntry from 'mf2/NoRemoteEntry';
// @ts-ignore
import Logs from 'mf2/utilities/Logs';
// import Main from './bootstrap';


const logs = new Logs('modules.parentRouter:3005', 'background: #222; color: #ff11ff');
logs.log('Hello and welcome! This is a test: ', 'Additional info', 123);

console.logs = logs.log;
// custom.d.ts
declare global {
    interface Console {
        logs: (...args: any[]) => void;
    }
}

const isDevelopment = (process.env.NODE_ENV === 'development');

const Entry = () => {
    return isDevelopment 
        ? <></> 
        : <NoRemoteEntry />
}

export default Entry