import { Link } from "react-router-dom";
import {
    Typography,
    Container,
    Box,
    List,
    ListItem,
    ListItemText,
    Grid,
} from "@mui/material";

function CV() {
    return (
        <>
            <Typography variant="h4" align="center" gutterBottom>
                CV
            </Typography>
            <Typography variant="body1" align="justify" paragraph>
                Hello there, I'm an innovative Frontend Developer, starving for
                more knowledge in the industry. A creative thinker, a talented,
                curious, self-driven individual on the way to become the best of
                the best. Bachelor in Economics.
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant="h5">Personal</Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText
                                    primary="Name"
                                    secondary="Nikola Lazarevic"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Email"
                                    secondary="nikola.lazaa@gmail.com"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Phone"
                                    secondary="(+1) 815-901-2122"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Location"
                                    secondary="Chicago, Illinois"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant="h5">Skills</Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText
                                    primary="Programming Languages"
                                    secondary="JavaScript, Java"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Web Development"
                                    secondary="HTML, CSS, Bootstrap, React, MUI, Node.js, Vue, Vuetify"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Database"
                                    secondary="MySQL, MongoDB"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Version Control"
                                    secondary="Git"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography variant="h5">Experience</Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText
                                    primary="Web developer Intern, ENON Solutions"
                                    secondary="• Had the first experience in a team IT project, and was in charge of the integra-
                                    tion of the front-end functionalities.
                                    
                                    • Created the plan for the project and realized it by the given deadline.
                                    • Communicated precisely with the back-end about the needed APIs and their
                                    data structure of them, which increased our overall speed of completing the
                                    project.
                                    • Accomplished the best user experience by collaborating with the company’s
                                    UI/UX engineer."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Technician, DS Computers"
                                    secondary="• Improved staff productivity by establishing clear guidelines in the production
                                    team. Which tripled the completed unit numbers based on the week.
                                    • Supervised and trained three technicians on the company’s policies and rules.
                                    • Increased the percentage of positive customer reviews by installing a system
                                    that tracked RMA’s priority and date of being received.
                                    • Selected as an employee of the month based on outstanding customer service."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Finance and accounting Intern, Banquet waiter"
                                    secondary="• Assisted the assistant manager in overall department operations.
                                    • Supervised and trained numerous waiters on the company’s policies and rules.
                                    • Appointed decentralized command during large-scale events in order that each
                                    member of the team had clear and precise instructions.
                                    • Selected as an employee of the month based on outstanding devotion to the
                                    team."
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Projects
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText
                                    sx={{ maxWidth: "700px" }}
                                    primary="Wallet.js"
                                    secondary="Click on the link to check out the app, I recommend to use presentational account

                                    (email: novcanik@test.com, pasword: Laza123). But feel free to create your own ac-
                                    count.
                                    
                                    In cooperation with the IT company ENON Solutions, I attended the internship for ten
                                    weeks.
                                    Techonogies used: HTML, CSS, JavaScript, Vue (incl. Vuex and Router), Git, SQL, and
                                    Mars (their own developed backend).
                                    I was in charge of building the front-end and applying the acquired skills to practical
                                    use."
                                />
                                <Link
                                    to="http://906y122.e2.mars-hosting.com/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {/* link to MARS Hosting */}
                                    try me
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Weather.js"
                                    secondary="Technologies used: Vue(Vuex,Router), fetch API, OpenWeather API, Vuetify, Firebase
                                    9, Git and Netlify."
                                />
                                <Link
                                    to="https://laza-weather-app.netlify.app/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {/* link to Netlify */}
                                    try me
                                </Link>
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary="WifeMinders.js"
                                    secondary="Technologies used: React(Redux, Router), CSS, Firebase and Netlify."
                                />
                                <Link
                                    to="http://906y122.e2.mars-hosting.com/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {/* link to Netlify */}
                                    try me
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default CV;
