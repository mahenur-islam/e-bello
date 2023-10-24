import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import BrandProducts from "../pages/BrandProducts";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from '../pages/ErrorPage'
import UpdateProduct from "../pages/UpdateProduct";
import ShowDetails from "../pages/ShowDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://e-bello-server-rnjd4fz5y-mdmahenurislams-projects.vercel.app/products"),
      },
      {
        path: "/products/:brandName",
        element: <PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>,
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://e-bello-server-rnjd4fz5y-mdmahenurislams-projects.vercel.app/products/${params.id}`)
      },
      {
        path: "/showdetails/:id",
        element: <PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://e-bello-server-rnjd4fz5y-mdmahenurislams-projects.vercel.app/products/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default routes;
