import MainPage from "./pages/MainPage";
import RootLayout from "./pages/Root";
import AuthenticationPage, {
    action as authAction,
} from "./pages/Authentication";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginAuthPage, { action as loginAction } from "./pages/LoginAuth";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import { action as logoutAction } from "./pages/Logout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        id: "root",
        loader: tokenLoader,
        children: [
            { index: true, loader: checkAuthLoader, element: <MainPage /> },
            {
                path: "auth", //do relative paths, no / in children routes
                element: <AuthenticationPage />,
                action: authAction,
            },
            {
                path: "login",
                element: <LoginAuthPage />,
                action: loginAction,
            },
            {
                path: "logout",
                action: logoutAction,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
