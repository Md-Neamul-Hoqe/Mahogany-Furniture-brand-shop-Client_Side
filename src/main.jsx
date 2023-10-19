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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <App />,
        // loader: () =>
        //   fetch("https://coffee-store-server-seven-gamma.vercel.app/coffee"),
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct />,
        // loader: ({ params }) =>
        //   fetch(
        //     `https://coffee-store-server-seven-gamma.vercel.app/coffee/${params.id}`
        //   ),
      },
      {
        path: "/productDetails",
        // path: "/productDetails/:id",
        element: <ProductDetails />,
        // loader: ({ params }) =>
        //   fetch(
        //     `https://coffee-store-server-seven-gamma.vercel.app/coffee/${params.id}`
        //   ),
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch(`./demo.json`),
      },
      {
        path: "/cart",
        element: <CartDetails />,
        loader: () => fetch(`./demo.json`),
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
