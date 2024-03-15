import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';
import { PageWIthNavbar, Services } from '../component';
import { About } from '../pages';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/about-us',
        element: <About />,
    },
])

export default routes;
