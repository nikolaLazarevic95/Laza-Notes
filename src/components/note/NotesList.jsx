import { Container, Grid } from "@mui/material";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import store from "../../store";
import { UIActions } from "../../store/ui";
import Masonry from "react-masonry-css";

function NotesList({ notes }) {
    const handleNoteClicked = () => {
        store.dispatch(UIActions.setIsOpen(true));
    };

    //xs={12} md={6} lg={3}
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };
    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {notes.map((note) => (
                        <Grid item key={note.id}>
                            <Link
                                to={note.id}
                                style={{ textDecoration: "none" }}
                            >
                                <div onClick={() => handleNoteClicked(note.id)}>
                                    <NoteCard note={note} />
                                </div>
                            </Link>
                        </Grid>
                    ))}
                </Masonry>
            </Container>
        </>
    );
}

export default NotesList;
