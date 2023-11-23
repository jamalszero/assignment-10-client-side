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
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './components/PrivateRoute';

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
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-jamalszero.vercel.app/products/${params.brand_name}`)
      },
      {
        path: "/product-details/:_id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-jamalszero.vercel.app/product-details/${params._id}`)
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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/update-product/:_id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-jamalszero.vercel.app/product-details/${params._id}`)
      },
      {
        path: "/my-cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
