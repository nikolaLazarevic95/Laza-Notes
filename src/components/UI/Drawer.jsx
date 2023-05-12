import React from "react";
import {
    // Divider,
    // IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    // Toolbar,
} from "@mui/material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLocation, useNavigate } from "react-router-dom";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ListItemText from "@mui/material/ListItemText";
// import { styled } from "@mui/material/styles";
// import MuiDrawer from "@mui/material/Drawer";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

//for always open, opposite off dynamic
let open = true;

const classes = {
    drawer: {
        width: drawerWidth,
        ".MuiDrawer-paper": {
            width: drawerWidth,
        },
    },
};

function DrawerComp() {
    // const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            title: "Notes",
            icon: <LightbulbOutlinedIcon />,
            path: "/notes",
        },
        {
            title: "Trash",
            icon: <DeleteOutlineOutlinedIcon />,
            path: "/trash",
        },
    ];

    //!  za manual open close
    // const toggleDrawer = () => {
    //     setOpen(!open);
    // };
    // const Drawer = styled(MuiDrawer, {
    //     shouldForwardProp: (prop) => prop !== "open",
    // })(({ theme, open }) => ({
    //     "& .MuiDrawer-paper": {
    //         position: "relative",
    //         whiteSpace: "nowrap",
    //         width: props.drawerWidth,
    //         transition: theme.transitions.create("width", {
    //             easing: theme.transitions.easing.sharp,
    //             duration: theme.transitions.duration.enteringScreen,
    //         }),
    //         boxSizing: "border-box",
    //         ...(!open && {
    //             overflowX: "hidden",
    //             transition: theme.transitions.create("width", {
    //                 easing: theme.transitions.easing.sharp,
    //                 duration: theme.transitions.duration.leavingScreen,
    //             }),
    //             width: theme.spacing(7),
    //             [theme.breakpoints.up("sm")]: {
    //                 width: theme.spacing(9),
    //             },
    //         }),
    //     },
    // }));

    return (
        <Drawer
            sx={classes.drawer}
            PaperProps={{
                style: {
                    marginTop: "64px", // Replace 64px with the height of your app bar
                },
            }}
            // variant="permanent"
            variant="persistent"
            anchor="left"
            open={open}
            // open="true"
        >
            {/* //! Toolbar za manual open close */}
            {/* <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>>
            </Toolbar>
            <Divider /> */}
            <List
                component="nav"
                //  sx={{ mt: 0, pt: 0 }}
            >
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item.path}
                        selected={location.pathname === item.path}
                        onClick={() => navigate(item.path)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.title}</ListItemText>
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
}

export default DrawerComp;
