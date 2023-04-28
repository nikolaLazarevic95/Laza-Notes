import { useState } from "react";
import { TextField, Box, Button, Container, Paper } from "@mui/material";
import { Form } from "react-router-dom";

function CreateNote() {
    const [title, setTitle] = useState("");
    const [titleErr, setTitleErr] = useState(false);
    const [description, setDescription] = useState("");
    const [descriptionErr, setDescriptionErr] = useState(false);
    const [isTitleClicked, setIsTitleClicked] = useState(false);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Title:", title);
    //     console.log("Description:", description);
    // };

    const handleTitleClick = () => {
        setIsTitleClicked(true);
    };
    const handleCloseTitleClick = () => {
        setIsTitleClicked(false);
    };

    const handleCheckIfOk = () => {
        setTitleErr(false);
        setDescriptionErr(false);

        if (title === "") {
            setTitleErr(true);
        }
        if (description === "") {
            setDescriptionErr(true);
        }
    };

    return (
        <>
            {/* <Container onClick={handleCloseTitleClick}> */}
            <Container>
                <Box sx={{ maxWidth: 500, margin: "auto" }}>
                    <Paper sx={{ mt: 4 }}>
                        <Form method="post">
                            <TextField
                                name="title"
                                error={titleErr}
                                helperText={
                                    titleErr ? "Title cannot be empty" : ""
                                }
                                sx={{
                                    mt: 0,
                                    mb: 0,
                                    pb: 0,
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: 0,
                                    },
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
                                    name="description"
                                    sx={{
                                        mt: 1,
                                        pt: 0,
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: 0,
                                        },
                                    }}
                                    fullWidth
                                    error={descriptionErr}
                                    helperText={
                                        descriptionErr
                                            ? "Description cannot be empty"
                                            : ""
                                    }
                                    label="Description"
                                    variant="outlined"
                                    value={description}
                                    onChange={(event) =>
                                        setDescription(event.target.value)
                                    }
                                    margin="normal"
                                    multiline
                                    rows={2}
                                />
                            )}
                            {isTitleClicked && (
                                <Box
                                    sx={{
                                        mr: 0.5,
                                        ml: 0.5,
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Button
                                        color="primary"
                                        type="submit"
                                        onClick={handleCheckIfOk}
                                    >
                                        Save
                                    </Button>
                                    <Button
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
