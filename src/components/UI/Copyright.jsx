import { Link, Typography } from "@mui/material";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link
                color="inherit"
                href="https://www.linkedin.com/in/nikola-lazarevi%C4%87-89a493150/"
            >
                Nikola Lazarevic
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;
