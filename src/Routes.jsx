import { createBrowserRouter } from "react-router-dom";
import App from "./LayOut/App";
import DashBoard from "./LayOut/Dashboard";
import AllTasks from "./pages/AllTasks/AllTasks";

import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserProfile from "./pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import AddBlog from "./pages/AddBlog/AddBlog";
// import AllBlogs from "./pages/AllBlogs/AllBlogs";
// import BlogDetails from "./pages/BlogDetails/BlogDetails";
// import ErrorPage from "./pages/ErrorPage/ErrorPage";
// import Featured from "./pages/Featured/Featured";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";
// import WishList from "./pages/WishList/WishList";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blogs",
                loader: () => fetch('/fakeBlogData.json'),
                element: <Blogs/>,
              },
              {
                path: "/contact",
                element: <ContactUs/>,
              },
            

        ],
    },


    {
        path: "/login",
        element: <PublicRoute><Login /></PublicRoute>,
    },
    {
        path: "/register",
        element: <PublicRoute><Register /></PublicRoute>,
    },

    {
        path: "dashboard",
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "user-profile",
                element: <PrivateRoute><UserProfile /></PrivateRoute>,
            },
            {
                path: "tasks",
                element: <PrivateRoute><AllTasks /></PrivateRoute>,
            },
         


        ]
    },


]);