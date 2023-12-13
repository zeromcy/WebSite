import { Grid, Paper, Typography } from "@mui/material"
import DiveImage from '../../image/dive-in.png'
import '../../css/img.css'
import WindowIcon from '@mui/icons-material/Window';
import LockIcon from '@mui/icons-material/Lock';
import Sub1Image from '../../image/smart-3.png'
import Encryption from '../../image/encryption.png'

export default function SubOne() {
    return (
        <>
            <Typography variant='h3' sx={{ mt: 15 }}>
                A form builder like no other
            </Typography>
            <Typography variant='h6' sx={{ width: '780px', mt: 2 }}>
                Tally makes it simple for anyone to build free online forms. No need to code — just type your questions like you would in a doc.
            </Typography>

            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ m: 5 }}>
                    <Typography variant="h4" sx={{ mt: 4 }}>
                        Unlimited forms and submissions for free
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, width: '780px' }}>
                        Paywalls getting in the way of great forms? Here at Tally, we provide unlimited forms, submissions, and everything you need to create professional forms and surveys — all free of charge as long as you stay within our fair usage guidelines.
                    </Typography>
                </Grid>
                <img src={DiveImage} alt="" width="100%"></img>
            </Paper>
            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={7}>
                    <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ mx: 5 }}>
                            <Grid item sm={12}>
                                <WindowIcon sx={{ my: 3 }} color="secondary"/>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="h6">
                                    Just start typing
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="subtitle1" sx={{ width: '500px' }}>
                                    Tally is a new type of online form builder that works like a text document. Just start typing on the page and insert blocks same as Notion.
                                </Typography>
                            </Grid>
                        </Grid>
                        <img src={Sub1Image} alt="" width='100%'></img>
                    </Paper>
                </Grid>
                <Grid item sm={5}>
                    <Paper elevation={2} sx={{ height: '100%' }}>
                        <Grid container sx={{ mx: 5 }}>
                            <Grid item sm={12}>
                                <LockIcon sx={{ my: 3 }} color="secondary"/>
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
            <Typography variant="h4" align='center' sx={{mt:5}} color='text.secondary'>
                “Loving Tally! Not sure why I only started using it now, so good!”
            </Typography>
        </>
    )
}