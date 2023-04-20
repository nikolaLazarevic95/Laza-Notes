import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function NoteCard({ note }) {
    return (
        <Card elevation={1}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {note.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {note.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
