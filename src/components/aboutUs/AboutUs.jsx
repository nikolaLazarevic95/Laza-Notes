import { Typography, Container } from "@mui/material";
import CV from "./CV";

function AboutUs() {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                About Laza Notes
            </Typography>
            {/* <Typography variant="body1" align="justify" paragraph>
                Introducing "Laza Notes" - Your Ultimate Note-Taking Companion
                Laza Notes is a versatile and feature-rich note-taking
                application designed to simplify your life. With Laza Notes, you
                can effortlessly create, edit, and delete notes, providing you
                with a seamless and intuitive experience to capture and organize
                your thoughts, ideas, and reminders.
            </Typography> */}
            <Typography variant="h7">
                Key features of the app include:
            </Typography>
            <Typography
                variant="body2"
                align="justify"
                paragraph
                sx={{ mt: 1 }}
            >
                <ul>
                    <li>
                        Create and Edit Notes: Easily jot down your ideas,
                        tasks, or important information using the intuitive note
                        creation interface. Modify your notes at any time to
                        keep them up to date.
                    </li>
                    <li>
                        Delete and Recover: We understand that mistakes happen,
                        which is why Laza Notes offers a built-in trash feature.
                        Accidentally deleted a note? No worries! You can restore
                        it from the trash with a single click. Alternatively, if
                        you wish to permanently remove a note, you have the
                        option to delete it permanently.
                    </li>
                    <li>
                        Secure Account Management: Laza Notes allows you to
                        create your own account, ensuring the privacy and
                        security of your notes. Simply sign up with your email
                        address, set a strong password, and enjoy a personalized
                        note-taking experience. You can also log in and log out
                        seamlessly, providing you with the flexibility to access
                        your notes whenever and wherever you need them.
                    </li>
                </ul>
            </Typography>
            <CV />
        </Container>
    );
}

export default AboutUs;
