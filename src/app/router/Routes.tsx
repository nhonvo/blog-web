import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Home from "../../features/home/home";
import App from "../../App";
import About from "../../features/about/about";
import Contact from "../../features/contact/contact";
import Profile from "../../features/profile/profile";
import Detail from "../../features/detail/detail";
import Blog from "../../features/blog/blog";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'blogPage', element: <Blog /> },
            { path: 'contact', element: <Contact /> },
            { path: 'profile', element: <Profile /> },
            { path: 'detail/:id', element: <Detail /> },
            { path: '*', element: <Navigate replace to='not-found' /> },
        ]
    }
]
export const router = createBrowserRouter(routes)