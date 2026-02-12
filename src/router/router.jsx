import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Post from "../pages/Post";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import TokenProfile from "../pages/TokenProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"register",
                element: <Register />
            },
            {
                path: "post",
                element: <Post />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "token-profile",
                element: <TokenProfile />
            },
        ]
    },,
])

export default router