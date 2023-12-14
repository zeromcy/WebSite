import { Grid, Paper, Typography } from "@mui/material"
import DiveImage from '../../image/dive-in.png'
import '../../css/img.css'
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import LockIcon from '@mui/icons-material/Lock';
import Encryption from '../../image/encryption.png'
import Sub1Video from '../../video/just-type-card.mp4'

export default function SubOne() {
    return (
        <>
            <Typography variant='h3' sx={{ mt: 15 }}>
                A form builder like no other
            </Typography>
            <Typography variant='h6' sx={{ maxWidth: '780px', mt: 2 }}>
                Tally makes it simple for anyone to build free online forms. No need to code — just type your questions like you would in a doc.
            </Typography>

            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ p: 2 }}>

                    <Typography variant="h4" sx={{ mt: 1 }}>
                        Unlimited forms and submissions for free
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 2, }}>
                        Paywalls getting in the way of great forms? Here at Tally, we provide unlimited forms, submissions, and everything you need to create professional forms and surveys — all free of charge as long as you stay within our fair usage guidelines.
                    </Typography>

                </Grid>
                <img src={DiveImage} alt="" width="100%"></img>
            </Paper>
            <Grid container spacing={3} sx={{ pt: 2 }}>
                <Grid item sm={7}>
                    <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ px: 5 }}>
                            <Grid item sm={12}>
                                <KeyboardCommandKeyIcon sx={{ py: 3 }} color="secondary" />
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="h5">
                                    Just start typing
                                </Typography>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography variant="subtitle1">
                                    Tally is a new type of online form builder that works like a text document. Just start typing on the page and insert blocks same as Notion.
                                </Typography>
                            </Grid>
                        </Grid>
                        <video playsinline="" autoplay="" muted="" loop="" width="100%" src={Sub1Video}></video>

                    </Paper>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <Paper elevation={2} sx={{ height: '100%' }}>
                        <Grid container sx={{ px: 3 }}>
                            <Grid item sm={12}>
                                <LockIcon sx={{ py: 3 }} color="secondary" />
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant='h5'>
                                    Privacy-friendly form builder
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant='subtitle1'>
                                    Your data privacy and security are our top priorities. We are GDPR compliant and treat your data with care and confidentiality.
                                </Typography>
                            </Grid>
                            <Grid item sm={12} sx={{ pt: 2 }}>
                                <Typography variant='subtitle1'>
                                    Tally is hosted in Europe, we don’t use cookie-tracking, and all form data is securely stored, and encrypted both in transit and at rest. Learn more about Tally & GDPR.
                                </Typography>
                            </Grid>
                        </Grid>
                        <img src={Encryption} alt='' width='100%'></img>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="h4" align='center' sx={{ mt: 5 }} color='text.secondary'>
                “Loving Tally! Not sure why I only started using it now, so good!”
            </Typography>
        </>
    )
}