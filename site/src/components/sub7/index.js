import MyLink from '../commom/MyLink';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import Sub7BackImage from '../../image/designed-for-you.png'
import { useMediaQuery, useTheme } from '@mui/material';


export default function SubSeven() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('md')) ? true : false;

    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={7} xs={7}>
                    <Typography variant='h3' sx={{ pt: 15 }}>
                        Designed for you
                    </Typography>
                    <Typography variant='h6' sx={{ pt: 2 }}>
                        Start from scratch or explore templates created by our community.
                    </Typography>
                </Grid>

                <Grid item sm={5} xs={5}
                    sx={{
                        alignSelf: 'end'
                    }}
                >
                    <Grid container
                        sx={{
                            justifyContent: 'flex-end'
                        }}>
                        {
                            match ?
                                <img src={Sub7BackImage} alt='' width="406" height='240' sx={{ color: 'transparent', }}>
                                </img>
                                :
                                <img src={Sub7BackImage} alt='' width="160" height='99' sx={{ color: 'transparent', }}>
                                </img>
                        }

                    </Grid>
                </Grid>
            </Grid>

            <Paper sx={{ height: '100%' }} elevation={3}>
                <Grid container sx={{ py: 3,px: 5 }}>
                    <Grid item sm={4}>
                        <Typography>
                            <GrassOutlinedIcon sx={{ pt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' >
                            Creators
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Sell products online" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Grow your newsletter" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Receive contact form messages" />
                                </MyLink>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography>
                            <HourglassEmptyOutlinedIcon sx={{ pt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' >
                            Product
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Gather audience feedback" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Receive feature requests" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Conduct user research" />
                                </MyLink>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography>
                            <AutoAwesomeOutlinedIcon sx={{ pt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6' >
                            Marketing
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Generate leads" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Register users" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Measure customer satisfaction" />
                                </MyLink>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid container sx={{ py: 3, px: 5 }}>
                    <Grid item sm={4}>
                        <Typography>
                            <ContactMailOutlinedIcon sx={{ pt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6'>
                            HR
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Evaluate employee engagement" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Receive job applications" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Create exit surveys" />
                                </MyLink>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography>
                            <ApartmentOutlinedIcon sx={{ pt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6'>
                            Office
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Organize team events" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Receive help desk tickets" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Collect internal suggestions" />
                                </MyLink>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography>
                            <SentimentSatisfiedOutlinedIcon sx={{ pt: 2 }} color='secondary' />
                        </Typography>
                        <Typography variant='h6'>
                            Personal
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Create an online quiz" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Send an RSVP form" />
                                </MyLink>
                            </ListItem>
                            <ListItem disablePadding>
                                <MyLink>
                                    <ListItemText primary="Organize a volunteer signup" />
                                </MyLink>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>


            <Typography variant="h4" align='center' sx={{ pt: 5 }} color='text.secondary'>
                “Non stop new features and amazing UX makes Tally my go-to form builder. I love using it!”
            </Typography>
        </>
    )
}