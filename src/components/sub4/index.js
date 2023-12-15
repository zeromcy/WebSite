import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { Grid, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import Sub4BackImage from '../../image/customize.png'
import { useMediaQuery, useTheme } from '@mui/material';
import MyCarousel from '../commom/carousel';
import img1 from '../../image/customization-1.png'
import img2 from '../../image/customization-2.png'
import img3 from '../../image/customization-3.png'
import img4 from '../../image/customization-4.png'
import img5 from '../../image/customization-5.png'

export default function SubFour() {
    const images = [img1,img2,img3,img4,img5]
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('md')) ? true : false;
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                    <Typography variant='h3' sx={{ pt: 15 }}>
                        Make forms uniquely yours
                    </Typography>
                    <Typography variant='h6' sx={{ pt: 2 }}>
                        Easily customize the design and layout to fit any form to your brand.
                    </Typography>
                </Grid>

                <Grid item sm={6} xs={0}
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
                                <img src={Sub4BackImage} alt='' width="406" height='240' sx={{ color: 'transparent', }}>
                                </img>
                                :
                                <img src={Sub4BackImage} alt='' width="200" height='116' sx={{ color: 'transparent', }}>
                                </img>
                        }
                    </Grid>
                </Grid>

            </Grid>



            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ p: 1 }}>
                    <Grid item sm={12} xs={12} sx={{ py: 1 }}>
                        <ColorLensOutlinedIcon color="secondary" />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <Typography variant="h4" >
                            Customize your form
                        </Typography>
                    </Grid>
                    <Typography variant="h6" sx={{ pt: 2 }}>
                        Use our pre-made themes or create your own design by customizing colors, fonts, buttons, and more.
                    </Typography>
                </Grid>

                <Grid item>
                    <MyCarousel type='center' images={images}/>
                </Grid>
                {/* <img src={InputImage} alt="" width="100%" height='300'></img> */}
            </Paper>

            <Grid container spacing={3} sx={{ pt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <AutoAwesomeMosaicOutlinedIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Column layout.</b> Display content side-by-side using columns.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CodeIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Custom CSS.</b> Inject custom CSS to fully control your form design.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CropOriginalIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Contact info.</b>Images. Add a logo, cover image and embed visuals.
                    </Typography>
                </Grid>
            </Grid>


            <Grid container spacing={3} sx={{ pt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <SmartDisplayOutlinedIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Embed online content.</b> Embed YouTube, Calendly, Maps, and more.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <RedoOutlinedIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Multi-page forms.</b> Create a single-page or multi-page form.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <TranslateOutlinedIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>40+ supported languages.</b> Translate the default form messages for respondents worldwide.
                    </Typography>
                </Grid>
            </Grid>


        </>
    )
}