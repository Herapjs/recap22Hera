import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Post from "../pages/Post";

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
        ]
    },,
])

export default router