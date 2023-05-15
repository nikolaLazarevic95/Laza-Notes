import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import AppBarComp from "./UI/AppBar.jsx";
import DrawerComp from "./UI/Drawer";
import Footer from "./UI/Footer.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const mdTheme = createTheme({
    palette: {
        primary: {
            main: "#2196f3",
        },
        secondary: {
            main: "#FFFFFF",
        },
    },
});

function NotesContent() {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AppBarComp />
                <DrawerComp />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    {/* // OVDE CONTENT IZNAD COPYRIGHT-A U MAIN SCREEN */}
                    <Outlet />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Footer sx={{ pt: 4 }} />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function MainScreen() {
    return <NotesContent />;
}
