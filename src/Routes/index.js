import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardRoutes from './DashboardRoutes';
import RequireAuth from "../Utils/RequireAuth";

const router = createBrowserRouter([
    {
        path:'/admin',
        element: <RequireAuth />,
        children: [
           ...DashboardRoutes,
        ]
    },
    {
        path: '/',
        element:<App/>,
    },
]);

export default router;