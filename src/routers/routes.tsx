import { createBrowserRouter } from "react-router-dom";
import MainLatout from "../layouts/MainLatout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLatout/>,
        children:[
            {
                index:true, element:<HomePage/>
            },
            {
                path: 'products', element: <ProductsPage/>
            }
        ]
    }
])