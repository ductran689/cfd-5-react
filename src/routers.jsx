import Mainlayout from "./layout/Mainlayout";
import Faq from "./pages/faq";
import Home from "./pages/home";
import Hoptac from "./pages/hoptac";
import Khoahoc from "./pages/khoahoc";
import Profile from "./pages/profile";
import Project from "./pages/projects";
import Register from "./pages/register";
import Team from './pages/team'
import Email from './pages/email'
import Page404 from './pages/page404'

const routers= [
    {
        path:'/email',
        component:Email
    },
    {
        path: '/',
        
        component: Mainlayout,
        routers: [
           
            {
                path:'/register',
                component: Register
            },
            {
                path:'/hoptac',
                component: Hoptac
            },
            {
                path:'/team',
                component: Team
            },
            {
                path:'/profile',
                component: Profile
            },
            {
                path:'/projects',
                component: Project
            },
            {
                path:'/khoahoc',
                component: Khoahoc
            },
            {
                path:'/faq',
                component: Faq
            },
            {
                path:'/',
                component: Home,
                exact:true
            },
            {
                component:Page404
            }

        ]
    },
    
    
]
export default routers;