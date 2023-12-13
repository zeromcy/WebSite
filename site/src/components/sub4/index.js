import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
                        <TuneIcon color="secondary"/>
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
                        <AlternateEmailIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Contact info. Collect names, addresses, phone numbers, emails & links.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CreditCardIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Accept payments. Create checkout forms without code.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <HistoryEduIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Signatures. Accept e-signatures and streamline contract signing.
                    </Typography>
                </Grid>
            </Grid>


            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <StarOutlineIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Rate & rank. Let users share their opinions using visually simple ratings, scales, and rankings.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <UploadFileIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        File uploads. Collect images, PDFs, video and audio files.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CalendarMonthIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        Date & Time. Allow respondents easily select date and time.
                    </Typography>
                </Grid>
            </Grid>


        </>
    )
}