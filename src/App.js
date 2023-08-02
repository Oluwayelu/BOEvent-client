import { BrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import AuthProvider from 'context/auth';
import RouterConfig from './routes/RouteConfig';

import './styles/tailwind.css';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  return (
    <SkeletonTheme baseColor="#D6D6D0">
      <AuthProvider>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </AuthProvider>
    </SkeletonTheme>
  );
}

export default App;
