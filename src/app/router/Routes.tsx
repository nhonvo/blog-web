import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import HomePage from "../../features/home/homepage";
import App from "../../App";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'home', element: <HomePage /> },
            { path: '*', element: <Navigate replace to='not-found' /> },
        ]
    }
]
export const router = createBrowserRouter(routes)