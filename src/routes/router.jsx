import ErrorPage from '@pages/404/ErrorPage.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
const routes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
  },
];
export default routes;
