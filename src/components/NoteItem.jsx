import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, CardActionArea, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { deleteDoc, doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [titleErr, setTitleErr] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionErr, setDescriptionErr] = useState(false);

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log("Title:", title);
  //     console.log("Description:", description);
  // };

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

  const handleDelete = async () => {
    const db = getFirestore();
    const docRef = doc(db, "notes", note.id);
    await deleteDoc(docRef).then(navigate("/notes"));
  };
  return (
    <Modal
      // open={open} //redux?
      // onClose={handleClose} //redux?
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card elevation={1} sx={style}>
        <CardActionArea>
          <CardContent>
            <TextField
              name="title"
              error={titleErr}
              helperText={titleErr ? "Title cannot be empty" : ""}
              onChange={(event) => setTitle(event.target.value)}
            >
              {note.title}
            </TextField>
            <TextField
              name="description"
              error={descriptionErr}
              helperText={descriptionErr ? "Description cannot be empty" : ""}
              onChange={(event) => setDescription(event.target.value)}
            >
              {note.description}
            </TextField>
          </CardContent>
        </CardActionArea>
        <Box
          sx={{
            mr: 0.5,
            ml: 0.5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button color="primary" type="submit" onClick={handleCheckIfOk}>
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
      </Card>
    </Modal>
  );
}
