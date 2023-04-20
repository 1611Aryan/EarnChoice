import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

const Router = () => [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
];

export default Router;
