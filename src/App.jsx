// import MainPageScreen from "./pages/MainPageScreen";
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
import TrashPage from "./pages/TrashPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NoteDetailPage, {
  loader as noteDetailLoader,
} from "./pages/NoteDetailPage";
// import EditNotePage from "./pages/EditNotePage";

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
        //mora ovako jer je render "/" da nije loader i index true ovde, a zelis po default da ide na /notes posle logina
        index: true,
        // path: "",
        // path: "notes",
        loader: checkAuthLoader,
        element: <NotesPage />,
      },
      //   {
      //     path: "notes",
      //     //trebace ti loader za firebase load, da li moze u loaderu da se pozove dr loader?
      //     // loader: checkAuthLoader, //vrv ne treba laoder
      //     element: <NotesPage />,
      //     loader: notesLoader,
      //     action: notesAction,
      //     children: [
      //       {
      //         path: ":noteId",
      //         loader: noteDetailLoader,
      //         element: <NoteDetailPage />,
      //         // children: [
      //         //     //action: deleteEventAction,, loader uzima od parenta
      //         //     {
      //         //         // index: true,
      //         //     },
      //         //     // vuce loader is parent route i populate info iz njega?
      //         //     // { path: "edit", element: <EditNotePage /> },
      //         // ],
      //       },
      //     ],
      //   },
      //   /notes
      {
        path: "notes",
        children: [
          {
            index: true,
            element: <NotesPage />,
            loader: notesLoader,
            action: notesAction,
          },
          {
            path: ":noteId",
            loader: noteDetailLoader,
            element: <NoteDetailPage />,
          },
        ],
      },

      // {
      //     path: "notes/:noteId",
      //     loader: noteDetailLoader,
      //     element: <NoteDetailPage />,
      // },

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
