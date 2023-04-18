import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton autoFocus>
            <ListItemIcon>
                <LightbulbOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Notes" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <DeleteOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
        </ListItemButton>
    </React.Fragment>
);
