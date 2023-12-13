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

export default function SubTwo() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <Typography variant='h3' sx={{ mt: 15 }}>
                        Simple but powerful
                    </Typography>
                    <Typography variant='h6' sx={{ width: '480px', mt: 2 }}>
                        Advanced features packed in a simple form builder. It couldn’t be easier to create forms that convert.
                    </Typography>
                </Grid>

                {/* <Grid item sm={6}>
                    <img src={ClickPlusImage} alt='' width="320" height='237' sx={{color:'transparent'}}></img>
                </Grid> */}
            </Grid>

            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ m: 5 }}>
                    <Grid item sm={12} sx={{ my: 3 }}>
                        <TuneIcon color="secondary"/>
                    </Grid>

                    <Typography variant="h4" >
                        Build any form in seconds
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, width: '780px' }}>
                        Easily create online forms using our wide range of free input blocks. Collect contact info, files, signatures, payments, and much more. Build everything from surveys to quizzes to lead generation forms.
                    </Typography>
                </Grid>
                <img src={InputImage} alt="" width="100%" height='300'></img>
            </Paper>

            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <AlternateEmailIcon color="secondary"/>
                    </Typography>
                    <Typography variant="subtitle1">
                        Contact info. Collect names, addresses, phone numbers, emails & links.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CreditCardIcon color="secondary"/>
                    </Typography>
                    <Typography variant="subtitle1">
                        Accept payments. Create checkout forms without code.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <HistoryEduIcon color="secondary"/>
                    </Typography>
                    <Typography variant="subtitle1">
                        Signatures. Accept e-signatures and streamline contract signing.
                    </Typography>
                </Grid>
            </Grid>


            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <StarOutlineIcon color="secondary"/>
                    </Typography>
                    <Typography variant="subtitle1">
                        Rate & rank. Let users share their opinions using visually simple ratings, scales, and rankings.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <UploadFileIcon color="secondary"/>
                    </Typography>
                    <Typography variant="subtitle1">
                        File uploads. Collect images, PDFs, video and audio files.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CalendarMonthIcon color="secondary"/>
                    </Typography>
                    <Typography variant="subtitle1">
                        Date & Time. Allow respondents easily select date and time.
                    </Typography>
                </Grid>
            </Grid>


        </>
    )
}