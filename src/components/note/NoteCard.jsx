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
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            lineHeight: "1.2em", // adjust as needed
                            maxHeight: "2.4em", // 2 lines with 1.2em line height
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2, // limit to 2 lines
                        }}
                    >
                        {note.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            lineHeight: "1.2em", // adjust as needed
                            maxHeight: "4.8em", // 2 lines with 1.2em line height
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 4, // limit to 4 lines
                        }}
                    >
                        {note.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
