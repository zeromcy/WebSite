import { Grid, Paper } from "@mui/material"
import DiveImage from '../../image/dive-in.png'
import '../../css/img.css'
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import LockIcon from '@mui/icons-material/Lock';
import Encryption from '../../image/encryption.png'
import Sub1Video from '../../video/just-type-card.mp4'
import { Sub1Content, SubTitle1, Sub2Content, SubTitle2, FootContent } from "../commom/myTypography";

export default function SubOne() {
    return (
        <>
            <SubTitle1 content={'A form builder like no other'}></SubTitle1>
            <Sub1Content content={'Tally makes it simple for anyone to build free online forms. No need to code — just type your questions like you would in a doc.'}></Sub1Content>

            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ p: 1 }}>
                    <SubTitle2 content={'Unlimited forms and submissions for free'}></SubTitle2>
                    <Sub2Content content={'Paywalls getting in the way of great forms? Here at Tally, we provide unlimited forms, submissions, and everything you need to create professional forms and surveys — all free of charge as long as you stay within our fair usage guidelines.'}></Sub2Content>

                </Grid>
                <img src={DiveImage} alt="" width="100%"></img>
            </Paper>
            <Grid container spacing={3} sx={{ pt: 2 }}>
                <Grid item sm={7}>
                    <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ px: 1 }}>
                            <Grid item sm={12} xs={12}>
                                <KeyboardCommandKeyIcon sx={{ py: 1 }} color="secondary" />
                            </Grid>
                            <Grid item sm={12} xs={12}>

                                <SubTitle2
                                    content={'Just start typing'}>
                                </SubTitle2>
                            </Grid>
                            <Grid item sm={12} xs={12}>

                                <Sub2Content
                                    content={'Tally is a new type of online form builder that works like a text document. Just start typing on the page and insert blocks same as Notion.'}>
                                </Sub2Content>
                            </Grid>
                        </Grid>
                        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" width="100%" src={Sub1Video}></video>

                    </Paper>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <Paper elevation={2} sx={{ height: '100%' }}>
                        <Grid container sx={{ px: 1 }}>
                            <Grid item sm={12} xs={12}>
                                <LockIcon sx={{ py: 1 }} color="secondary" />
                            </Grid>
                            <Grid item sm={12} xs={12}>

                                <SubTitle2
                                    content={'Privacy-friendly form builder'}>
                                </SubTitle2>
                            </Grid>
                            <Grid item sm={12}>

                                <Sub2Content
                                    content={'Your data privacy and security are our top priorities. We are GDPR compliant and treat your data with care and confidentiality.'}>
                                </Sub2Content>
                            </Grid>
                            <Grid item sm={12} sx={{ pt: 2 }}>

                                <Sub2Content
                                    content={'ally is hosted in Europe, we don’t use cookie-tracking, and all form data is securely stored, and encrypted both in transit and at rest. Learn more about Tally & GDPR.'}>
                                </Sub2Content>
                            </Grid>
                        </Grid>
                        <img src={Encryption} alt='' width='100%'></img>
                    </Paper>
                </Grid>
            </Grid>
        
            <FootContent
                content={'“Loving Tally! Not sure why I only started using it now, so good!”'}>
            </FootContent>
        </>
    )
}