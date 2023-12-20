import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
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
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            // {
            //     path: "/all-blogs",
            //     element: <AllBlogs />,
            // },
            // {
            //     path: "/blog-details/:id",
            //     element: <BlogDetails />,
            // },
            // {
            //     path: "/wishlist",
            //     element: <PrivateRoute><WishList /></PrivateRoute>,
            // },
            // {
            //     path: "/featured",
            //     element: <Featured />,
            // },
            // {
            //     path: "/add-blog",
            //     element: <PrivateRoute><AddBlog /></PrivateRoute>,
            // },
            // {
            //     path: "/update-blog/:id",
            //     element: <PrivateRoute><UpdateBlog /></PrivateRoute>,
            // },
            // {
            //     path: "/login",
            //     element: <PublicRoute><Login/></PublicRoute>,
            // },
            // {
            //     path: "/register",
            //     element: <PublicRoute><Register/></PublicRoute>,
            // },

        ],
    },
]);