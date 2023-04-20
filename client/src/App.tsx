import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Router from './Router';

function App() {
  const router = createBrowserRouter(Router());

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
