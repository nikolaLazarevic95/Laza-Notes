import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import AppBarComp from "./UI/AppBar.jsx";
import DrawerComp from "./UI/Drawer";
import Copyright from "./UI/Copyright.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const mdTheme = createTheme();

function NotesContent() {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
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

                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}></Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function MainScreen() {
    return <NotesContent />;
}
