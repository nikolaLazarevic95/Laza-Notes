import { useState } from "react";
import { TextField, Box, Button, Container, Paper } from "@mui/material";
import { Form } from "react-router-dom";

function CreateNote() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isTitleClicked, setIsTitleClicked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Title:", title);
        console.log("Description:", description);
    };

    const handleTitleClick = () => {
        setIsTitleClicked(true);
    };
    const handleCloseTitleClick = () => {
        setIsTitleClicked(false);
    };

    return (
        <>
            {/* <Container onClick={handleCloseTitleClick}> */}
            <Container>
                <Box sx={{ maxWidth: 500, margin: "auto" }}>
                    <Paper sx={{ mt: 4 }}>
                        <Form onSubmit={handleSubmit}>
                            <TextField
                                sx={{
                                    mt: 0,
                                    mb: 0,
                                    pb: 0,
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: 0,
                                    },
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { "&:focus": { outline: "none" } },
                                }}
                                fullWidth
                                label="Title"
                                variant="outlined"
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                                margin="normal"
                                onClick={handleTitleClick}
                            />
                            {isTitleClicked && (
                                <TextField
                                    sx={{
                                        mt: 0,
                                        pt: 0,
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: 0,
                                        },
                                    }}
                                    fullWidth
                                    label="Description"
                                    variant="outlined"
                                    value={description}
                                    onChange={(event) =>
                                        setDescription(event.target.value)
                                    }
                                    margin="normal"
                                    multiline
                                    rows={4}
                                />
                            )}
                            {isTitleClicked && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <Button
                                        // variant="o"
                                        color="primary"
                                        // type="submit"
                                        onClick={handleCloseTitleClick}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            )}
                        </Form>
                    </Paper>
                </Box>
            </Container>
        </>
    );
}

export default CreateNote;
