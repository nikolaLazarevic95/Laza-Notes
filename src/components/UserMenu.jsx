import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function AccountMenu(props) {
    const firebaseConfig = {
        apiKey: "AIzaSyAuW5oe4scG7Tutkkm-xdovSk1bCBFUy3o",
        authDomain: "notes-app-react-3b950.firebaseapp.com",
        projectId: "notes-app-react-3b950",
        storageBucket: "notes-app-react-3b950.appspot.com",
        messagingSenderId: "770951680515",
        appId: "1:770951680515:web:67f9fc738b976947983436",
        measurementId: "G-6KCYSW89VX",
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const userEmail = useSelector((state) => state.auth.userEmail);
    const userEmailUppercase = userEmail ? userEmail.toUpperCase() : "";

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = async () => {
        // localStorage.removeItem("token");
        // navigate("/auth?mode=login");
        await signOut(auth).then(() => {
            localStorage.removeItem("token");
            navigate("/auth?mode=login");
        });
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} sx={{ p: 0 }}>
                        <Avatar
                            alt={userEmailUppercase}
                            src="/static/images/avatar/2.jpg"
                        />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                //? keepMounted
                id="menu-appbar"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem>
                    <Avatar /> {userEmail}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
