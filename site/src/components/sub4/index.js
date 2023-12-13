import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { Grid, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import InputImage from '../../image/input-badges.png'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import Sub4BackImage from '../../image/customize.png'

export default function SubFour() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={7}>
                    <Typography variant='h3' sx={{ mt: 15 }}>
                        Make forms uniquely yours
                    </Typography>
                    <Typography variant='h6' sx={{ width: '480px', mt: 2 }}>
                        Easily customize the design and layout to fit any form to your brand.
                    </Typography>
                </Grid>

                <Grid item sm={5}
                    sx={{
                        position: 'relative',
                        top: 55,
                        right: -70
                    }}
                >
                    <img src={Sub4BackImage} alt='' width="406" height='240' sx={{ color: 'transparent', }}>
                    </img>
                </Grid>

            </Grid>



            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ m: 5 }}>
                    <Grid item sm={12} sx={{ my: 3 }}>
                        <ColorLensOutlinedIcon color="secondary" />
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h4" >
                            Customize your form
                        </Typography>
                    </Grid>
                    <Typography variant="h6" sx={{ mt: 2, width: '780px' }}>
                        Use our pre-made themes or create your own design by customizing colors, fonts, buttons, and more.
                    </Typography>
                </Grid>
                <img src={InputImage} alt="" width="100%" height='300'></img>
            </Paper>

            <Grid container spacing={3} sx={{ mt: 2 }}>
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


            <Grid container spacing={3} sx={{ mt: 2 }}>
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