import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./views/Home";
import { store } from "./app/store.js";

const router = createBrowserRouter([
        {
                path:"/",
                element:<Home />
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
