import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, Typography } from "@mui/material";
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
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function NoteItem({ note }) {
    const isOpen = useSelector((state) => state.ui.isOpen);
    const { noteId } = useParams();
    const navigate = useNavigate();
    const db = getFirestore();

    const handleClose = () => {
        store.dispatch(UIActions.setIsOpen(false));
        navigate("..");
    };

    const handleRestore = async () => {
        //send note back to /notes
        const docRef = doc(db, "trash", noteId);
        const NoteColRef = collection(db, "notes");

        await deleteDoc(docRef);
        // mora dva navigate .. da bi se vratio na /trash, onace ostane id u url i baca err jer mislid a ima title od obrisanog
        await addDoc(NoteColRef, note).then(navigate(".."));
        // await addDoc(NoteColRef, note);
        navigate("..");
    };

    const handleDelete = async () => {
        const docRef = doc(db, "trash", noteId);
        await deleteDoc(docRef).then(navigate(".."));
        //send to trash
        navigate("..");
    };
    return (
        <Modal
            open={isOpen} //redux?
            onClose={handleClose} //redux?
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card elevation={1} sx={style}>
                <Form method="PATCH">
                    <CardContent>
                        <Typography>Title: {note.title}</Typography>
                        <Typography>Description: {note.description}</Typography>
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
                            // type="submit"
                            onClick={handleRestore}
                        >
                            Restore
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
