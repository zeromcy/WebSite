import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { Grid, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import InputImage from '../../image/input-badges.png'
import TuneIcon from '@mui/icons-material/Tune';

export default function SubFour() {
    return (
        <>

            <Typography variant='h3' sx={{ mt: 15 }}>
                Make forms uniquely yours
            </Typography>
            <Typography variant='h6' sx={{ width: '480px', mt: 2 }}>
                Easily customize the design and layout to fit any form to your brand.
            </Typography>


            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ m: 5 }}>
                    <Grid item sm={12} sx={{ my: 3 }}>
                        <TuneIcon color="secondary" />
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
                        Contact info. ColColumn layout. Display content side-by-side using columns.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CodeIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Custom CSS. Inject custom CSS to fully control your form design.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CropOriginalIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Images. Add a logo, cover image and embed visuals.
                    </Typography>
                </Grid>
            </Grid>


            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <SmartDisplayOutlinedIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Embed online content. Embed YouTube, Calendly, Maps, and more.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <RedoOutlinedIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Multi-page forms. Create a single-page or multi-page form.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <TranslateOutlinedIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        40+ supported languages. Translate the default form messages for respondents worldwide.
                    </Typography>
                </Grid>
            </Grid>


        </>
    )
}