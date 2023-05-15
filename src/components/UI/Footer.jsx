import { Box, Typography } from "@mui/material";
import {
    BottomNavigationAction,
    // makeStyles,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright(props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                minHeight: "70vh",
            }}
        >
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: "auto",
                }}
            >
                <Typography
                    sx={{
                        mt: 2,
                        ml: 10,
                    }}
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    // {...props}
                >
                    {"Copyright ©   Nikola Lazarevic"}{" "}
                    {new Date().getFullYear()}
                    {/* <Link
                    color="inherit"
                    href="https://www.linkedin.com/in/nikola-lazarevi%C4%87-89a493150/"
                >
                    Nikola Lazarevic
                </Link>{" "}
                {new Date().getFullYear()} */}
                </Typography>
                <Box sx={{ ml: 13 }}>
                    <BottomNavigationAction
                        href="https://www.linkedin.com/in/nikola-lazarevi%C4%87-89a493150/"
                        label="Linkedin"
                        icon={<LinkedInIcon />}
                    />
                    <BottomNavigationAction
                        sx={{
                            ml: 0,
                            pl: 0,
                        }}
                        label="Github"
                        icon={<GitHubIcon />}
                        href="https://github.com/nikolaLazarevic95"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Copyright;
