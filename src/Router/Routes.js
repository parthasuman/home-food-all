import Main from "../Layout/Main";
import AllService from "../Pages/Shared/AllService/AllService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import ServiceFood from "../Pages/ServiceFood/ServiceFood";
import Reviews from "../Pages/Reviews/Reviews";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Post from "../Pages/Home/Post/Post";
import Blogs from "../Pages/Blogs/Blogs";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allservices",
        element: <AllService></AllService>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/servicefood/:id",
        element: (
          <PrivateRoute>
            <ServiceFood></ServiceFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allservices/${params.id}`),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
