import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import AuthenticationPage, {
    action as authAction,
} from "./pages/Authentication";
import { checkAuthLoader, tokenLoader, checkIfLoggedIn } from "./util/auth";
import { action as logoutAction } from "./pages/Logout";
import NotesPage, {
    loader as notesLoader,
    action as notesAction,
} from "./pages/NotesPage";
import TrashPage, { loader as trashLoader } from "./pages/TrashPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NoteDetailPage, {
    loader as noteDetailLoader,
    action as noteDetailAction,
} from "./pages/NoteDetailPage";

const theme = createTheme({
    palette: {
        background: {
            // color: "white",
            default: "white", //? zasto ne radi? i dalje je sivkasto
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        // id: "root",
        loader: tokenLoader,
        children: [
            {
                index: true,
                loader: checkAuthLoader,
                element: <NotesPage />,
            },
            {
                path: "notes",
                loader: notesLoader,
                id: "notesLoader",
                children: [
                    {
                        index: true,
                        element: <NotesPage />,
                        action: notesAction,
                    },
                    {
                        path: ":noteId",
                        element: <NoteDetailPage />,
                        loader: noteDetailLoader,
                        action: noteDetailAction,
                    },
                ],
            },

            {
                path: "trash",
                loader: trashLoader,
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
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
