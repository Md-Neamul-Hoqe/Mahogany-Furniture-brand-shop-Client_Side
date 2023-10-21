import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./Home.jsx";
import Template from "./Template.jsx";
import AddProduct from "./Pages/AddProduct.jsx";
import UpdateProduct from "./Pages/UpdateProduct.jsx";
import CartDetails from "./Pages/CartDetails";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
// import Users from "./components/Users.jsx";
import Error404 from "./Pages/Error404.jsx";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import { HelmetProvider } from "react-helmet-async";
import PrivateRoutes from "./PrivateRoutes";
// import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          console.log(params);
          return fetch(`http://127.0.0.1:5000/products/${params.id}`);
        },
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:5000/products/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <CartDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch(`http://127.0.0.1:5000/products`),
      },
      {
        path: "/shop/:brand",
        element: <Shop />,
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:5000/shop/${params.brand}`),
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      // {
      //   path: "/users",
      //   element: <Users />,
      //   loader: () =>
      //     fetch("https://coffee-store-server-seven-gamma.vercel.app/user"),
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
