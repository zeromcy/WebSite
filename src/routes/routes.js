import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../components/home/home'
import About from '../components/aboutus/index'
import TP from '../components/terms&privacy/index'
import Cookie from '../components/cookie/index'
import Privacy from '../components/privacy/index'
import Terms from '../components/terms/index'
import ErrorPage from "../components/home/error";

//方式一
const routes = [
    {
        id: 1,
        path: '/',
        element: <Home />,
        errorElement:<ErrorPage/>
    },
    {
        id: 2,
        path: '/about',
        element: <About />
    },
    
    {
        id: 5,
        path: '/tp',
        children:[
            {
                id: 3,
                path: '',
                element: <TP />,
            },
            {
                id: 3,
                path: 'cookie',
                element: <Cookie />
            },
            {
                id: 4,
                path: 'privacy',
                element: <Privacy />
            },
            {
                id: 6,
                path: 'terms',
                element: <Terms />
            },
        ]
    },
    
]

// 方式二
const router = createBrowserRouter(routes)

export default router
export { routes }