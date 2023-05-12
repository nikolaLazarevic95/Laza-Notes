// import { IconButton, Toolbar } from "@mui/material";
import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
// import MenuIcon from "@mui/icons-material/Menu";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import Typography from "@mui/material/Typography";
import UserMenu from "../UserMenu";
// import styled from "@emotion/styled";
// import MuiAppBar from "@mui/material/AppBar";

// const drawerWidth = 240;

//for always open, opposite off dynamic
let open = true;

function AppBarComp() {
    // const AppBar = styled(MuiAppBar, {
    //     shouldForwardProp: (prop) => prop !== "open",
    // })(({ theme, open }) => ({
    //     zIndex: theme.zIndex.drawer + 1,
    //     transition: theme.transitions.create(["width", "margin"], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    //     ...(open && {
    //         marginLeft: drawerWidth,
    //         width: `calc(100% - ${drawerWidth}px)`,
    //         transition: theme.transitions.create(["width", "margin"], {
    //             easing: theme.transitions.easing.sharp,
    //             duration: theme.transitions.duration.enteringScreen,
    //         }),
    //     }),
    // }));
    return (
        <AppBar
            open={open}
            // open="true"
            // position="static"
        >
            <Toolbar
                sx={{
                    pr: "24px", // keep right padding when drawer closed
                }}
            >
                {/* <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    // onClick={toggleDrawer}
                    // sx={{
                    //     marginRight: "36px",
                    //     ...(open && { display: "none" }),
                    // }}
                >
                    <MenuIcon />
                </IconButton> */}
                <NoteAddOutlinedIcon
                    fontSize="large"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        mr: 1,
                    }}
                />
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Laza Notes
                </Typography>
                <UserMenu />
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComp;
