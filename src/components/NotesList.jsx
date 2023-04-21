import { Container, Grid } from "@mui/material";
import NoteCard from "./NoteCard";

const futureNotesArr = [
    { title: "Uperi auto", description: " u perionici" },
    { title: "auto", description: " u ponici" },
    { title: "Knjiga", description: " lupi je" },
    { title: "Biblioteka", description: " Vrati je" },
    { title: "Indijanci", description: " Javi se " },
    { title: "Brijac", description: "Obri se" },
    { title: "Telefon", description: " Plati racun" },
];

function NotesList() {
    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {futureNotesArr.map((note) => (
                        <Grid item key={note.title} xs={12} md={6} lg={3}>
                            {/* //ovde dynamic link to the noteDetailPage i u njega  paste data form the loader*/}
                            <NoteCard note={note} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default NotesList;
