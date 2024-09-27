// import MfeButton from 'mfe2/Button';
// @ts-ignore
import NoRemoteEntry from 'mf2/NoRemoteEntry';
// import Main from './bootstrap';

const isDevelopment = (process.env.NODE_ENV === 'development');

const Entry = () => {
    return isDevelopment 
        ? <></> 
        : <NoRemoteEntry />
}

export default Entry