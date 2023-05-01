import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import AuthenticationPage, {
    action as authAction,
} from "./pages/authPages/Authentication";
import { checkAuthLoader, tokenLoader, checkIfLoggedIn } from "./util/auth";
import { action as logoutAction } from "./pages/authPages/Logout";
import NotesPage, {
    loader as notesLoader,
    action as notesAction,
} from "./pages/notes/NotesPage";
import TrashPage, { loader as trashLoader } from "./pages/trash/TrashPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NoteDetailPage, {
    loader as noteDetailLoader,
    action as noteDetailAction,
} from "./pages/notes/NoteDetailPage";
import TrashDetailPage, {
    loader as trashDetailLoader,
} from "./pages/trash/TrashDetailPage";

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
                //? moze bez elementa ovde />,
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
                id: "trashLoader",
                children: [
                    { index: true, element: <TrashPage /> },
                    {
                        path: ":noteId",
                        element: <TrashDetailPage />,
                        loader: trashDetailLoader,
                    },
                ],
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
