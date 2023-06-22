import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './routes/RouteConfig';

import './styles/tailwind.css';

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
