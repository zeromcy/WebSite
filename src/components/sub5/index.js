import '../../css/paper.css'
import { CircleIcon } from "../head/circleIcon";
import StyledButton from "../commom/MyButton"
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { Grid, Paper, Typography, Toolbar, Divider } from "@mui/material"
import '../../css/img.css'
import InputImage from '../../image/input-badges.png'
import Sub5BackImage from '../../image/paper-plane.png'
import '../../css/btn.css'
import { useMediaQuery, useTheme } from '@mui/material';
import { Sub1Content, SubTitle1, Sub2Content, SubTitle2 } from "../commom/myTypography";


export default function SubFive() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('md')) ? true : false;

    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={7} xs={12}>

                    <SubTitle1
                        content={'Share with your audience'}>
                    </SubTitle1>
                    <Sub1Content
                        content={'Tailor how you share and display forms to connect with your audience across platforms.'}>
                    </Sub1Content>
                </Grid>

                <Grid item sm={5} xs={0}
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
                                <img src={Sub5BackImage} alt='' width="406" height='240' sx={{ color: 'transparent', }}>
                                </img>
                                :
                                <img src={Sub5BackImage} alt='' width="200" height='174' sx={{ color: 'transparent', }}>
                                </img>
                        }


                    </Grid>
                </Grid>
            </Grid>


            <Grid container spacing={3}>
                <Grid item sm={7} xs={12}>
                    <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ p: 1 }}>
                            <Grid item sm={12} xs={12} sx={{ py: 1 }}>
                                <SpaceDashboardOutlinedIcon color="secondary" />
                            </Grid>



                            <SubTitle2
                                content={' Embed'}>
                            </SubTitle2>
                            <Sub2Content
                                content={'Seamlessly embed your forms into your website, landing page, or Notion. Whether you use WordPress, Webflow, Framer, or any other website builder, integrating Tally forms into your web pages is simple.'}>
                            </Sub2Content>
                        </Grid>
                        <Paper elevation={3} className='paper_1'>
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
                            <img src={InputImage} alt="" width="100%" height='300'></img>
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <Grid container sx={{ py: 3 }} >
                        <Grid item sm={12} sx={{ pb: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ p: 1 }}>
                                    <Grid item sm={12} xs={12} sx={{ py: 2 }}>
                                        <BrandingWatermarkOutlinedIcon color="secondary" />
                                    </Grid>



                                    <SubTitle2
                                        content={' Popup'}>
                                    </SubTitle2>
                                    <Sub2Content
                                        content={'Create an eye-catching popup form for your website in seconds.'}>
                                    </Sub2Content>
                                </Grid>
                                <StyledButton className='btn' variant="contained" sx={{ width: '90%', m: 2 }}>Click me</StyledButton>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} sx={{ py: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ p: 1 }}>
                                    <Grid item sm={12} xs={12} sx={{ py: 2 }}>
                                        <AttachFileOutlinedIcon color="secondary" />
                                    </Grid>



                                    <SubTitle2
                                        content={' Tally links'}>
                                    </SubTitle2>
                                    <Sub2Content
                                        content={'Share your unique Tally form link with anyone.'}>
                                    </Sub2Content>
                                </Grid>
                                <StyledButton className='btn' variant="contained" sx={{ width: '90%', m: 2 }}>Click me</StyledButton>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} sx={{ py: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ p: 1 }}>
                                    <Grid item sm={12} xs={12} sx={{ py: 2 }}>
                                        <LanguageOutlinedIcon color="secondary" />
                                    </Grid>



                                    <SubTitle2
                                        content={'Custom domains'}>
                                    </SubTitle2>
                                    <Sub2Content
                                        content={'Host forms on your own (sub)domain to create branded form links.'}>
                                    </Sub2Content>
                                </Grid>
                                <StyledButton className='btn' variant="contained" sx={{ width: '90%', m: 2 }}>Click me</StyledButton>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}