import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import LogIn from "../pages/LogIn";
import Register from '../pages/Register'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>, 
            }, 
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            }, 
            {
                path: '/mycart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/products')
            }, 
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default routes;