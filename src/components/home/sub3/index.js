import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InputIcon from '@mui/icons-material/Input';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Sub1Image from '../../../image/smart-3.png'
import Encryption from '../../../image/encryption.png'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Grid, Paper, Typography, Toolbar, Divider } from "@mui/material"
import { CircleIcon } from '../head/circleIcon';
import '../../../css/img.css'
import InputImage from '../../../image/smart-3.png'
import LogicIcon from './logic';
import CalculatorIcon from './calculator';
import Sub3BackImage from '../../../image/smart.png'
import { useMediaQuery, useTheme } from '@mui/material';
import { Sub1Content, SubTitle1, Sub2Content, SubTitle2, FootContent } from "../commom/myTypography";
import image from '../../../image/quote-nathan.png'

export default function SubThree() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('md')) ? true : false;
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>

                    <SubTitle1 content={'Craft intelligent forms'}></SubTitle1>
                    <Sub1Content content={'Our smart features make it easy to turn your forms into a tailored experience for every respondent.'}></Sub1Content>
                </Grid>
                <Grid item sm={6} xs={0}
                    zIndex='-1'
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
                <Grid container sx={{ p: 1 }}>
                    <Grid item sm={12} xs={12} sx={{ py: 1 }}>
                        <LogicIcon />
                    </Grid>
                    <Grid item sm={12} xs={12}>


                        <SubTitle2
                            content={'Conditional logic'}></SubTitle2>
                        <Sub2Content content={'Build dynamic forms that adapt based on prior inputs or external data. Show and hide blocks, insert branching, or calculate values to create a personalized form experience.'}
                        ></Sub2Content>
                    </Grid>
                </Grid>
                <Grid item >
                    <Paper elevation={2} sx={{ mx: '5%' }}>
                        <Toolbar
                            sx={{
                                '&': {
                                    minHeight: '48px'
                                }
                            }}>
                            <CircleIcon />
                            <CircleIcon />
                            <CircleIcon />
                        </Toolbar>
                        <Divider />
                        <img src={InputImage} alt="" width="100%" height='100%'></img>
                    </Paper>
                </Grid>
            </Paper>

            <Grid container spacing={3} sx={{ pt: 1 }}>
                <Grid item sm={6}>
                    <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ px: 3 }}>
                            <Grid item sm={12} xs={12}>
                                <CalculatorIcon />
                            </Grid>
                            <Grid item sm={12} xs={12}>

                                <SubTitle2
                                    content={'Calculator'}>
                                </SubTitle2>
                            </Grid>
                            <Grid item sm={12} xs={12}>

                                <Sub2Content
                                    content={'Use variables to create dynamic content and calculate values, scores, prices and more.'}>
                                </Sub2Content>
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

                                <SubTitle2
                                    content={'Hidden fields'}>
                                </SubTitle2>
                            </Grid>
                            <Grid item sm={12} xs={12}>

                                <Sub2Content
                                    content={'Pass data to your form with URL parameters. Include UTM parameters or personal data for a customized experience.'}>
                                </Sub2Content>
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


            <FootContent
                name='Natan Castiel'
                occ='Head of Growth, Gelt'
                image={image}
                content={'“Tally is doing to forms what Notion did to docs & sheets.”'}>
            </FootContent>

        </>
    )
}