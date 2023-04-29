import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
} from "firebase/firestore";
import { Form, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import { UIActions } from "../../store/ui";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function NoteItem({ note }) {
    const isOpen = useSelector((state) => state.ui.isOpen);
    const { noteId } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState(note.title);
    const [titleErr, setTitleErr] = useState(false);
    const [description, setDescription] = useState(note.description);
    const [descriptionErr, setDescriptionErr] = useState(false);

    const handleClose = () => {
        store.dispatch(UIActions.setIsOpen(false));
        navigate("..");
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Title:", title);
    //     console.log("Description:", description);
    // };

    const handleCheckIfOk = () => {
        setTitleErr(false);
        setDescriptionErr(false);

        // if (note.title === "") {
        //     setTitleErr(true);
        // }
        // if (note.description === "") {
        //     setDescriptionErr(true);
        // }
        if (title === "") {
            setTitleErr(true);
        }
        if (description === "") {
            setDescriptionErr(true);
        }
    };

    const handleDelete = async () => {
        const db = getFirestore();
        const docRef = doc(db, "notes", noteId);
        const colRefTrash = collection(db, "trash");
        // const selectedNote = {
        //     title: note.title,
        //     description: note.description,
        // };
        await deleteDoc(docRef);
        //send to trash
        await addDoc(colRefTrash, note).then(navigate(".."));

        navigate("..");
    };
    return (
        <Modal
            open={isOpen} //redux
            onClose={handleClose} //redux
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card elevation={1} sx={style}>
                <Form method="PATCH">
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            sx={{ mb: 1 }}
                            name="title"
                            label="title"
                            error={titleErr}
                            helperText={titleErr ? "Title cannot be empty" : ""}
                            onChange={(event) => setTitle(event.target.value)}
                            defaultValue={note ? note.title : ""}
                        ></TextField>
                        <TextField
                            name="description"
                            label="description"
                            multiline
                            minRows={5}
                            maxRows={8}
                            error={descriptionErr}
                            helperText={
                                descriptionErr
                                    ? "Description cannot be empty"
                                    : ""
                            }
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            defaultValue={note ? note.description : ""}
                        ></TextField>
                    </CardContent>
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
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </Box>
                </Form>
            </Card>
        </Modal>
    );
}
