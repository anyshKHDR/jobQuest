import "./dist/styles.css";
import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import AppInitializer from "./components/utils/AppInitializer.jsx";
import { store } from "./app/store.js";
import Layout from "./components/Layout.jsx";
import RecruiterEntryPage from "./views/RecruiterEntryPage.jsx";
import SignIn from "./components/SignIn.jsx";
import RecruiterRegister from "./views/RecruiterRegister.jsx";
import RecruiterdDashboard from "./views/RecruiterHome.jsx";
import NewPost from "./components/NewPost.jsx";
import UserHome from "./views/UserHome.jsx";
import UserSignUp from "./views/UserRegister.jsx";
import UserDashboardView from "./views/UserDashboardView.jsx";
import AdminHome from "./views/AdminHome.jsx";
import ManageJobCategory from "./components/ManageJobCategory.jsx";
import UserSignIn from "./views/UserSignIn.jsx";

        
const router = createBrowserRouter([
        {
                element:<Layout />,
                children:[
                        {
                                path:"/",
                                element:<UserHome />
                        },

                        //RECRUITER
                        {
                                path:"/recruiter",
                                element:<RecruiterEntryPage />
                        },
                        {
                                path:"/recruiter/signIn",
                                element:<SignIn />
                        },
                        {
                                path:"/recruiter/register",
                                element: <RecruiterRegister />,
                        },
                        {
                                path:"/recruiter/dashboard/:id",
                                element: <RecruiterdDashboard />,
                        },
                        {
                                path:"/recruiter/dashboard/:id/newPost",
                                element: <NewPost />,
                        },
                        //USER
                        {
                                path:"/user/register",
                                element:<UserSignUp />
                        },
                        {
                                path:"/user/signIn",
                                element:<UserSignIn />
                        },
                        {
                                path:"/user/dashboard",
                                element:<UserDashboardView />
                        },
                        //ADMIN
                        {
                                path:"/admin/prime/schrodinger",
                                element:<AdminHome />
                        },
                        {
                                path:"/admin/prime/schrodinger/manageJobCategory",
                                element:<ManageJobCategory />
                        }
                ]
        }
]);

const root = createRoot(document.getElementById("root"));
root.render(
        <StrictMode>
                <Provider store={store}>
                        <AppInitializer>
                                <RouterProvider router={router} />
                        </AppInitializer>
                </Provider>
        </StrictMode>
);
