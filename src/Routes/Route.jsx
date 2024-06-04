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
import PostDetails from "../Pages/PostDetails";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MakeAnnouncement from "../Pages/Dashboard/Admin/MakeAnnouncement";
import ReportedComments from "../Pages/Dashboard/Admin/ReportedComments";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import AdminRoute from "./AdminRoute";

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
                path: '/details/:id',
                element: <PostDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`)
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

            //Admin Routes
            {
                path: 'adminProfile',
                element: <AdminRoute>
                    <AdminProfile />
                </AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute>
                    <ManageUsers />
                </AdminRoute>
            },
            {
                path: 'makeAnnouncement',
                element: <AdminRoute>
                    <MakeAnnouncement />
                </AdminRoute>
            },
            {
                path: 'reportedComment',
                element: <AdminRoute>
                    <ReportedComments />
                </AdminRoute>
            },
        ]
    }
]);

export default router