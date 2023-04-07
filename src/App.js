import MainPage from "./pages/MainPage";
import RootLayout from "./pages/Root";
import AuthenticationPage, {
    action as authAction,
} from "./pages/Authentication";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginAuth, { action as loginAction } from "./pages/LoginAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <MainPage /> },
            {
                path: "auth", //do relative paths, no / in children routes
                element: <AuthenticationPage />,
                action: authAction,
            },
            {
                path: "login",
                element: <LoginAuth />,
                action: loginAction,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
