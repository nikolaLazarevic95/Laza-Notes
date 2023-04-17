// import MainPageScreen from "./pages/MainPageScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import AuthenticationPage, {
    action as authAction,
} from "./pages/Authentication";
import { checkAuthLoader, tokenLoader, checkIfLoggedIn } from "./util/auth";
import { action as logoutAction } from "./pages/Logout";
import NotesPage from "./pages/NotesPage";
import TrashPage from "./pages/TrashPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        id: "root",
        loader: tokenLoader,
        children: [
            {
                //mora ovako jer je render "/" da nije loader i index true ovde, a zelis po default da ide na /notes posle logina
                index: true,
                // path: "notes",
                loader: checkAuthLoader,
                // element: <NotesPage />,
            },
            {
                path: "notes",
                //trebace ti loader za firebase load, da li moze u loaderu da se pozove dr loader?
                loader: checkAuthLoader, //vrv ne treba laoder
                element: <NotesPage />,
            },
            {
                path: "trash",
                loader: checkAuthLoader,
                element: <TrashPage />, //vrv ne treba laoder
            },
            {
                path: "auth", //do relative paths, no / in children routes
                element: <AuthenticationPage />,
                action: authAction,
                loader: checkIfLoggedIn,
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
