import "./dist/styles.css";
import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store.js";
import Layout from "./components/Layout.jsx";
import RecruiterEntryPage from "./views/RecruiterEntryPage.jsx";
import SignIn from "./components/SignIn.jsx";
import RecruiterRegister from "./views/RecruiterRegister.jsx";
import RecruiterHome from "./views/RecruiterHome.jsx";
import NewPost from "./components/NewPost.jsx";
import UserHome from "./views/UserHome.jsx";
import UserSignUp from "./views/UserRegister.jsx";
import PostDetails from "./components/PostDetails.jsx";
import Post from "./views/Post.jsx";
import UserDashboard from "./components/UserDashboard.jsx";
import UserDashboardView from "./views/UserDashboardView.jsx";

const router = createBrowserRouter([
        {
                element:<Layout />,
                children:[
                        {
                                path:"/recruiter",
                                element:<RecruiterEntryPage />
                        },
                        {
                                path:"/recruiterSignIn",
                                element:<SignIn />
                        },
                        {
                                path:"/recruiterReg",
                                element: <RecruiterRegister />,
                        },
                        {
                                path:"/recruiterHome",
                                element: <RecruiterHome />,
                        },
                        {
                                path:"/newPost",
                                element: <NewPost />,
                        },
                        {
                                path:"/userHome",
                                element:<UserHome />
                        },
                        {
                                path:"/userRegister",
                                element:<UserSignUp />
                        },
                        // {
                        //         path:"recruiterHome/post/list/postDetails/:postId",
                        //         element:<PostDetails />
                        // },

                        {
                                path:"/userDashboard",
                                element:<UserDashboardView />
                        }
                ]
        }
]);

const root = createRoot(document.getElementById("root"));
root.render(
        <StrictMode>
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
        </StrictMode>
);
