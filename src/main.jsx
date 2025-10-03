import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // import styling global (opsional)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/404";
import Auth from "./pages/auth";
import ProductsPage from "./pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth type="login" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Auth type="login" />,
  },
  {
    path: "/register",
    element: <Auth type="register" />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
