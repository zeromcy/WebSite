import { Grid, List, ListItem, Link, ListItemText, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import TuneIcon from '@mui/icons-material/Tune';

export default function SubSeven() {
    return (
        <>

            <Typography variant='h3' sx={{ mt: 15 }}>
                Designed for you
            </Typography>
            <Typography variant='h6' sx={{ width: '480px', mt: 2 }}>
                Start from scratch or explore templates created by our community.
            </Typography>

            <Paper sx={{ height: '100%' }} elevation={3}>
                <Grid container sx={{ my: 3, mx: 10 }}>
                    <Grid item sm={4}>
                        <Typography>
                            <TuneIcon sx={{ mt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' sx={{ width: '480px', }}>
                            Creators
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Sell products online" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Grow your newsletter" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Receive contact form messages" />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography>
                            <TuneIcon sx={{ mt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' sx={{ width: '480px', }}>
                            Product
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Gather audience feedback" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Receive feature requests" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Conduct user research" />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography>
                            <TuneIcon sx={{ mt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' sx={{ width: '480px', }}>
                            Marketing
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Generate leads" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Register users" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Measure customer satisfaction" />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid container sx={{ my: 3, mx: 10 }}>
                    <Grid item sm={4}>
                        <Typography>
                            <TuneIcon sx={{ mt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' sx={{ width: '480px', }}>
                            HR
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Evaluate employee engagement" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Receive job applications" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Create exit surveys" />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography>
                            <TuneIcon sx={{ mt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' sx={{ width: '480px', }}>
                            Office
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Organize team events" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Receive help desk tickets" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Collect internal suggestions" />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography>
                            <TuneIcon sx={{ mt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' sx={{ width: '480px', }}>
                            Personal
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Create an online quiz" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Send an RSVP form" />
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link>
                                    <ListItemText primary="Organize a volunteer signup" />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>


            <Typography variant="h4" align='center' sx={{ mt: 5 }} color='text.secondary'>
                “Non stop new features and amazing UX makes Tally my go-to form builder. I love using it!”
            </Typography>
        </>
    )
}