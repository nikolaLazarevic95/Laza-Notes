import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import store from "./store/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <SignUp /> },
    // { path: "/login", element: <Login /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
