import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import HomePage from "../../features/home/homepage";
import App from "../../App";
import About from "../../features/about/about";
import Contact from "../../features/contact/contact";
import PostDetail from "../../features/post/postDetail";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'home', element: <HomePage /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'detail/:id', element: <PostDetail /> },
            { path: '*', element: <Navigate replace to='not-found' /> },
        ]
    }
]
export const router = createBrowserRouter(routes)