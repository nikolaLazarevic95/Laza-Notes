import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
// import Link from "@mui/material/Link";
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
import Copyright from "./UI/Copyright";

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
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
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
                        </Box>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
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
                                        sx={{ mt: 3, mb: 2 }}
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
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        {isSubmitting ? "........." : "SUBMIT"}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </Form>
    );
}
