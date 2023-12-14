import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InputIcon from '@mui/icons-material/Input';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Sub1Image from '../../image/smart-3.png'
import Encryption from '../../image/encryption.png'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Grid, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import InputImage from '../../image/input-badges.png'
import LogicIcon from './logic';
import CalculatorIcon from './calculator';
import Sub3BackImage from '../../image/smart.png'
import { useMediaQuery, useTheme } from '@mui/material';

export default function SubThree() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('md')) ? true : false;
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6} xs={6}>
                    <Typography variant='h3' sx={{ pt: 15 }}>
                        Craft intelligent forms
                    </Typography>
                    <Typography variant='h6' sx={{ pt: 2 }}>
                        Our smart features make it easy to turn your forms into a tailored experience for every respondent.
                    </Typography>
                </Grid>
                <Grid item sm={6} xs={6}
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
                                <img src={Sub3BackImage} alt='' width="406" height='240' sx={{ color: 'transparent', }}>
                                </img>
                                :
                                <img src={Sub3BackImage} alt='' width="160" height='97' sx={{ color: 'transparent', }}>
                                </img>
                        }
                    </Grid>

                </Grid>

            </Grid>

            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ p: 3 }}>
                    <Grid item sm={12} xs={12} sx={{ py: 1 }}>
                        <LogicIcon />
                    </Grid>

                    <Typography variant="h4" >
                        Craft intelligent formsConditional logic
                    </Typography>
                    <Typography variant="h6" sx={{ pt: 2 }}>
                        Build dynamic forms that adapt based on prior inputs or external data. Show and hide blocks, insert branching, or calculate values to create a personalized form experience.
                    </Typography>
                </Grid>
                <img src={InputImage} alt="" width="100%" height='300'></img>
            </Paper>

            <Grid container spacing={3} sx={{ pt: 1 }}>
                <Grid item sm={6}>
                    <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ px: 3 }}>
                            <Grid item sm={12} xs={12}>
                                <CalculatorIcon />
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography variant="h5">
                                    Calculator
                                </Typography>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography variant="subtitle1" >
                                    Use variables to create dynamic content and calculate values, scores, prices and more.
                                </Typography>
                            </Grid>
                        </Grid>
                        <img src={Sub1Image} alt="" width='100%'></img>
                    </Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper elevation={2} sx={{ height: '100%' }}>
                        <Grid container sx={{ px: 3 }}>
                            <Grid item sm={12} xs={12}>
                                <VisibilityOffIcon sx={{ py: 1 }} color="secondary" />
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography variant='h5'>
                                    Hidden fields
                                </Typography>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography variant='subtitle1'>
                                    Pass data to your form with URL parameters. Include UTM parameters or personal data for a customized experience.
                                </Typography>
                            </Grid>
                            <Grid item sm={12} sx={{ pt: 2 }}>
                                <Typography variant='subtitle1' >
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
                        <b>Answer piping.</b> Mention answers from earlier questions to personalize your form.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <MarkEmailReadIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Email notifications.</b> Send tailored emails to yourself and respondents.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <ShortcutIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Redirect on completion.</b> Forward respondents to another web page.
                    </Typography>
                </Grid>
            </Grid>


            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <InputIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Pre-populate fields.</b> Save time by pre-filling form fields with data you already have about respondents.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <SmartToyIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>reCAPTCHA.</b> Protect your forms from spam and bots.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <ChatBubbleOutlineIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Partial submissions.</b> Capture unfinished form submissions.
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h4" align='center' sx={{ mt: 5 }} color='text.secondary'>
                “Tally is doing to forms what Notion did to docs & sheets.”
            </Typography>

        </>
    )
}