import StyledButton from "../commom/MyButton"
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { Grid, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import InputImage from '../../image/input-badges.png'
import Sub5BackImage from '../../image/customize.png'
import '../../css/btn.css'
import { useMediaQuery, useTheme } from '@mui/material';

export default function SubFive() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('md')) ? true : false;

    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={7} xs={7}>
                    <Typography variant='h3' sx={{ pt: 15 }}>
                        Share with your audience
                    </Typography>
                    <Typography variant='h6' sx={{ pt: 2 }}>
                        Tailor how you share and display forms to connect with your audience across platforms.
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
                        <Grid container sx={{ p: 3 }}>
                            <Grid item sm={12} xs={12} sx={{ py: 1 }}>
                                <SpaceDashboardOutlinedIcon color="secondary" />
                            </Grid>

                            <Typography variant="h4" >
                                Embed
                            </Typography>
                            <Typography variant="h6" sx={{ pt: 2}}>
                                Seamlessly embed your forms into your website, landing page, or Notion. Whether you use WordPress, Webflow, Framer, or any other website builder, integrating Tally forms into your web pages is simple.
                            </Typography>
                        </Grid>
                        <img src={InputImage} alt="" width="100%" height='300'></img>
                    </Paper>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <Grid container sx={{ py: 3 }} >
                        <Grid item sm={12} sx={{ pb: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ p: 2 }}>
                                    <Grid item sm={12} xs={12} sx={{ py: 2 }}>
                                        <BrandingWatermarkOutlinedIcon color="secondary" />
                                    </Grid>

                                    <Typography variant="h4" >
                                        Popup
                                    </Typography>
                                    <Typography variant="h6" sx={{ pt: 2}}>
                                        Create an eye-catching popup form for your website in seconds.
                                    </Typography>
                                </Grid>
                                <StyledButton className='btn' variant="contained" sx={{ width: '90%', m: 2 }}>Click me</StyledButton>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} sx={{ py: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ p: 2 }}>
                                    <Grid item sm={12} xs={12} sx={{ py: 2 }}>
                                        <AttachFileOutlinedIcon color="secondary" />
                                    </Grid>

                                    <Typography variant="h4" >
                                        Tally links

                                    </Typography>
                                    <Typography variant="h6" sx={{ pt: 2 }}>
                                        Share your unique Tally form link with anyone.
                                    </Typography>
                                </Grid>
                                <StyledButton className='btn' variant="contained" sx={{ width: '90%', m: 2 }}>Click me</StyledButton>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} sx={{ py: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ p: 2 }}>
                                    <Grid item sm={12} xs={12} sx={{ py: 2 }}>
                                        <LanguageOutlinedIcon color="secondary" />
                                    </Grid>

                                    <Typography variant="h4" >
                                        Custom domains
                                    </Typography>
                                    <Typography variant="h6" sx={{ pt: 2}}>
                                        Host forms on your own (sub)domain to create branded form links.
                                    </Typography>
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