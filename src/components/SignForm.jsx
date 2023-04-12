import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    Form,
    useActionData,
    useNavigation,
    useSearchParams,
    Link as LinkRouter,
} from "react-router-dom";

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
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function SignForm() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get("email"),
    //         password: data.get("password"),
    //     });
    // };

    const data = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <Form method="post">
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar> */}
                        {
                            <NoteAddOutlinedIcon
                                fontSize="large"
                                color="primary"
                            />
                        }
                        <Typography component="h1" variant="h5">
                            {isLogin ? "Login" : "Sign Up"}
                        </Typography>
                        <Box
                            // component="form"
                            noValidate
                            // onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            {data && data.errors && (
                                <ul>
                                    {Object.values(data.errors).map((err) => (
                                        <li key={err}>{err}</li>
                                    ))}
                                </ul>
                            )}
                            {data && data.message && <p>{data.message}</p>}
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Grid>
                                {/* <Button
                                    //!link to login
                                    // type="submit"
                                    component={Link}
                                    href={`?mode=${isLogin ? "auth" : "login"}`}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, ml: 1 }}
                                >
                                    {isLogin ? "Sign UP" : "Login"}{" "}
                                </Button> */}
                                <Button
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, ml: 1 }}
                                >
                                    <LinkRouter
                                        style={{
                                            textDecoration: "none",
                                            backgroundColor: "transparent",
                                            color: "white",
                                        }}
                                        to={`?mode=${
                                            isLogin ? "signUp" : "login"
                                        }`}
                                    >
                                        {isLogin ? "Sign UP" : "Login"}
                                    </LinkRouter>
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, ml: 26, mr: 0 }}
                                >
                                    {isSubmitting ? "........." : "SUBMIT"}
                                </Button>
                            </Grid>
                            <Grid container justifyContent="flex-end"></Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </Form>
    );
}
