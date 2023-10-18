import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./Home.jsx";
import Template from "./Template.jsx";
import AddProduct from "./Pages/AddProduct.jsx";
import UpdateProduct from "./Pages/UpdateProduct.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
// import Users from "./components/Users.jsx";
import Error404 from "./Pages/Error404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
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
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
