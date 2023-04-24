import { Container, Grid } from "@mui/material";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";

function NotesList({ notes }) {
    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {notes.map((note) => (
                        <Grid item key={note.id} xs={12} md={6} lg={3}>
                            {/* //ovde dynamic link to the noteDetailPage i u njega  paste data form the loader*/}
                            <Link
                                // to={`/notes/${note.id}`}
                                // to={"/trash"} //working fine
                                to={note.id}
                                style={{ textDecoration: "none" }}
                            >
                                {/* umesto Link , da stavim handleClick pa u njemu da podesimo modal u reduxu 
                                pa use navigate da se preusmeri na modal za pojedinacan */}
                                <NoteCard note={note} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default NotesList;
