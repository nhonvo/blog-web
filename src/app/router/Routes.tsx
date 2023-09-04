import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import HomePage from "../../features/home/homepage";
import App from "../../App";
import About from "../../features/about/about";
import Contact from "../../features/contact/contact";
import Detail from "../../features/blog/Detail";
import BlogProfile from "../../features/profile/blogProfile";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'home', element: <HomePage /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'profile', element: <BlogProfile /> },
            { path: 'detail/:id', element: <Detail /> },
            { path: '*', element: <Navigate replace to='not-found' /> },
        ]
    }
]
export const router = createBrowserRouter(routes)