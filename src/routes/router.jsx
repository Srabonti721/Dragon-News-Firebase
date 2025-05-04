import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivetRoute from "../components/provider/privetRoute";
import Loading from "../pages/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement:<Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: '/auth/login', Component: Login },
      { path: "/auth/register", Component: Register }
    ]
  },
  {
    path: "/news-details/:id",
    loader: () => fetch("../../public/news.json"),
    hydrateFallbackElement:<Loading></Loading>,
    element:<PrivetRoute>
      <NewsDetails></NewsDetails>
    </PrivetRoute>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
