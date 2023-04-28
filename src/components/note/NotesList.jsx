import { Container, Grid } from "@mui/material";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import store from "../../store";
import { UIActions } from "../../store/ui";

function NotesList({ notes }) {
    const handleNoteClicked = () => {
        store.dispatch(UIActions.setIsOpen(true));
    };

    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {notes.map((note) => (
                        <Grid item key={note.id} xs={12} md={6} lg={3}>
                            <Link
                                to={note.id}
                                style={{ textDecoration: "none" }}
                            >
                                <Grid
                                    onClick={() => handleNoteClicked(note.id)}
                                >
                                    <NoteCard note={note} />
                                </Grid>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default NotesList;
