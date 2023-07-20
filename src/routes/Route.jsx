import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path:'/cart',
                element: <Cart></Cart>
            }
        ]
    },
]);

export default router