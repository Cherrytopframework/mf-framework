import { createRoot } from 'react-dom/client';
import App from './components/Mui/Dashboard/Dashboard';
import Providers from './components/custom/providers/Providers';
import './styles/index.css'; // Optional CSS file

const root = createRoot(document.getElementById('root')!);
root.render(
    <Providers path={(paths) => `${paths.notion}/list`}>
        {(init: any) => <App initialData={init} />}
    </Providers>
);

// export {};
