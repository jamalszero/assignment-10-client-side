import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/UpdateProduct';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products/:brand_name",
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.brand_name}`)
      },
      {
        path: "/product-details/:_id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/product-details/${params._id}`)
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/update-product/:_id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:3000/product-details/${params._id}`)
      },
      {
        path: "/my-cart",
        element: <Cart></Cart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
 