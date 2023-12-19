import Home from '../components/home/home'
import About from '../components/aboutus/index'
import TP from '../components/terms&privacy/index'
import Cookie from '../components/cookie/index'
import Privacy from '../components/privacy/index'

const routes = [
    {
        id:1,
        path:'/',
        element:<Home/>
    },
    {
        id:2,
        path:'/about',
        element:<About/>
    },
    {
        id:3,
        path:'/cookie',
        element:<Cookie/>
    },
    {
        id:4,
        path:'/privacy',
        element:<Privacy/>
    },
    {
        id:5,
        path:'/tp',
        element:<TP/>
    },
]

export default routes