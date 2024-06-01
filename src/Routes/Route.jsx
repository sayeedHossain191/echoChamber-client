import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Membership from "../Pages/Membership/Membership";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";
import AddPost from "../Pages/Dashboard/AddPost";
import Mypost from "../Pages/Dashboard/Mypost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/membership',
                element: <PrivateRoute>
                    <Membership />
                </PrivateRoute>
            }
        ]
    },

    //Dashboard Route
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,
        children: [
            {
                path: 'profile',
                element: <MyProfile />
            },
            {
                path: 'addpost',
                element: <AddPost />
            },
            {
                path: 'mypost',
                element: <Mypost />
            },
        ]
    }
]);

export default router