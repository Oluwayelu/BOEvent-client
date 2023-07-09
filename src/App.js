import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './routes/RouteConfig';
import AuthProvider from 'context/auth';

import './styles/tailwind.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
