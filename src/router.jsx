import { createBrowserRouter } from "react-router";

// features
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import DetailProduct from "./pages/Detail.jsx";

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
]);

export default router;
