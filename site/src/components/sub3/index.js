import WindowIcon from '@mui/icons-material/Window';
import LockIcon from '@mui/icons-material/Lock';
import Sub1Image from '../../image/smart-3.png'
import Encryption from '../../image/encryption.png'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Grid, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import InputImage from '../../image/input-badges.png'
import TuneIcon from '@mui/icons-material/Tune';

export default function SubThree() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <Typography variant='h3' sx={{ mt: 15 }}>
                        Craft intelligent forms
                    </Typography>
                    <Typography variant='h6' sx={{ width: '480px', mt: 2 }}>
                        Our smart features make it easy to turn your forms into a tailored experience for every respondent.
                    </Typography>
                </Grid>


            </Grid>

            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ m: 5 }}>
                    <Grid item sm={12} sx={{ my: 3 }}>
                        <TuneIcon />
                    </Grid>

                    <Typography variant="h4" >
                        Craft intelligent formsConditional logic
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, width: '780px' }}>
                        Build dynamic forms that adapt based on prior inputs or external data. Show and hide blocks, insert branching, or calculate values to create a personalized form experience.
                    </Typography>
                </Grid>
                <img src={InputImage} alt="" width="100%" height='300'></img>
            </Paper>

            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={6}>
                    <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ mx: 5 }}>
                            <Grid item sm={12}>
                                <WindowIcon sx={{ my: 3 }} />
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="h6">
                                    Just start typing
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="subtitle1" sx={{ width: '400px' }}>
                                    Tally is a new type of online form builder that works like a text document. Just start typing on the page and insert blocks same as Notion.
                                </Typography>
                            </Grid>
                        </Grid>
                        <img src={Sub1Image} alt="" width='100%'></img>
                    </Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper elevation={2} sx={{ height: '100%' }}>
                        <Grid container sx={{ mx: 5 }}>
                            <Grid item sm={12}>
                                <LockIcon sx={{ my: 3 }} />
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant='h6'>
                                    Privacy-friendly form builder
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant='subtitle1' sx={{ width: '400px' }}>
                                    Your data privacy and security are our top priorities. We are GDPR compliant and treat your data with care and confidentiality.
                                </Typography>
                            </Grid>
                            <Grid item sm={12} sx={{ mt: 2 }}>
                                <Typography variant='subtitle1' sx={{ width: '400px' }}>
                                    Tally is hosted in Europe, we don’t use cookie-tracking, and all form data is securely stored, and encrypted both in transit and at rest. Learn more about Tally & GDPR.
                                </Typography>
                            </Grid>
                        </Grid>
                        <img src={Encryption} alt='' width='100%'></img>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <AlternateEmailIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Contact info. Collect names, addresses, phone numbers, emails & links.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CreditCardIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Accept payments. Create checkout forms without code.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <HistoryEduIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Signatures. Accept e-signatures and streamline contract signing.
                    </Typography>
                </Grid>
            </Grid>


            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <StarOutlineIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Rate & rank. Let users share their opinions using visually simple ratings, scales, and rankings.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <UploadFileIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        File uploads. Collect images, PDFs, video and audio files.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CalendarMonthIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Date & Time. Allow respondents easily select date and time.
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h4" align='center' sx={{ mt: 5 }} color='text.secondary'>
                “Tally is doing to forms what Notion did to docs & sheets.”
            </Typography>

        </>
    )
}