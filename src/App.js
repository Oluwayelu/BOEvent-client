import { BrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import RouterConfig from './routes/RouteConfig';
import { AuthProvider, ToastProvider } from 'context';

import './styles/tailwind.css';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  return (
    <SkeletonTheme baseColor="#D6D6D0">
      <AuthProvider>
        <ToastProvider>
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </SkeletonTheme>
  );
}

export default App;
