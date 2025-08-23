import { createBrowserRouter } from "react-router";

// features
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

import HomePage from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import DetailProduct from "./pages/Detail.jsx";

import Login from "./features/login/Login.jsx";
import Register from "./features/register/Register.jsx";
import Profile from "./features/profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: Products },
      { path: "profile", Component: Profile },
      { path: "products/:category", Component: Products },
      { path: "detail/:id", Component: DetailProduct },
    ],
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);

export default router;
