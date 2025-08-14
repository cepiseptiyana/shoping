import { createBrowserRouter } from "react-router";

// features
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

import HomePage from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import DetailProduct from "./pages/Detail.jsx";

import Login from "./features/login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: Products },
      { path: "products/:category", Component: Products },
      { path: "detail/:id", Component: DetailProduct },
    ],
  },

  {
    path: "login",
    Component: AuthLayout,
    children: [{ index: true, Component: Login }],
  },
]);

export default router;
