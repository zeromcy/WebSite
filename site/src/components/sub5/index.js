import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { Grid, Paper, Typography, Button } from "@mui/material"
import '../../css/img.css'
import InputImage from '../../image/input-badges.png'
import Sub5BackImage from '../../image/customize.png'


export default function SubFive() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={7}>
                    <Typography variant='h3' sx={{ mt: 15 }}>
                        Share with your audience
                    </Typography>
                    <Typography variant='h6' sx={{ width: '480px', mt: 2 }}>
                        Tailor how you share and display forms to connect with your audience across platforms.
                    </Typography>
                </Grid>

                <Grid item sm={5}
                    sx={{
                        position: 'relative',
                        top: 55,
                        right: -70
                    }}
                >
                    <img src={Sub5BackImage} alt='' width="406" height='240' sx={{ color: 'transparent', }}>
                    </img>
                </Grid>
            </Grid>


            <Grid container spacing={3}>
                <Grid item sm={7}>
                    <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ m: 5 }}>
                            <Grid item sm={12} sx={{ my: 3 }}>
                                <SpaceDashboardOutlinedIcon color="secondary" />
                            </Grid>

                            <Typography variant="h4" >
                                Embed
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 2, width: '600px' }}>
                                Seamlessly embed your forms into your website, landing page, or Notion. Whether you use WordPress, Webflow, Framer, or any other website builder, integrating Tally forms into your web pages is simple.
                            </Typography>
                        </Grid>
                        <img src={InputImage} alt="" width="100%" height='300'></img>
                    </Paper>
                </Grid>
                <Grid item sm={5}>
                    <Grid container sx={{ my: 3 }} >
                        <Grid item sm={12} sx={{ mb: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item sm={12} sx={{ my: 2 }}>
                                        <BrandingWatermarkOutlinedIcon color="secondary" />
                                    </Grid>

                                    <Typography variant="h4" >
                                        Popup
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 2, width: '400px' }}>
                                        Create an eye-catching popup form for your website in seconds.
                                    </Typography>
                                </Grid>
                                <Button variant="contained" sx={{ width: '90%', m: 2 }}>Click me</Button>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} sx={{ my: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item sm={12} sx={{ my: 2 }}>
                                        <AttachFileOutlinedIcon color="secondary" />
                                    </Grid>

                                    <Typography variant="h4" >
                                        Tally links

                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 2, width: '400px' }}>
                                        Share your unique Tally form link with anyone.
                                    </Typography>
                                </Grid>
                                <Button variant="contained" sx={{ width: '90%', m: 2 }}>Click me</Button>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} sx={{ my: 3 }}>
                            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item sm={12} sx={{ my: 2 }}>
                                        <LanguageOutlinedIcon color="secondary" />
                                    </Grid>

                                    <Typography variant="h4" >
                                        Custom domains
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 2, width: '400px' }}>
                                        Host forms on your own (sub)domain to create branded form links.
                                    </Typography>
                                </Grid>
                                <Button variant="contained" sx={{ width: '90%', m: 2 }}>Click me</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>





        </>
    )
}