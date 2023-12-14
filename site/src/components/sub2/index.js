import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Grid, Paper, Typography } from "@mui/material"
import '../../css/img.css'
import InputImage from '../../image/input-badges.png'
import BuildIcon from './build';
import Sub2BackImage from '../../image/click-plus.png'
import { useMediaQuery, useTheme } from '@mui/material';


export default function SubTwo() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('md')) ? true : false;
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6} xs={6}>
                    <Typography variant='h3' sx={{ pt: 15 }}>
                        Simple but powerful
                    </Typography>
                    <Typography variant='h6' sx={{ pt: 2 }}>
                        Advanced features packed in a simple form builder. It couldn’t be easier to create forms that convert.
                    </Typography>
                </Grid>

                <Grid item sm={6} xs={6}
                    sx={{
                        alignSelf: 'end',
                        // justifySelf:'end'
                    }}
                >
                    <Grid container
                        sx={{
                            justifyContent: 'flex-end'
                        }}>

                        {
                            match ?
                                <img src={Sub2BackImage} alt='' width="320" height='237'
                                    sx={{
                                        color: 'transparent',
                                    }}>
                                </img>
                                :
                                <img src={Sub2BackImage} alt='' width="200" height='148'
                                    sx={{
                                        color: 'transparent',
                                    }}>
                                </img>

                        }
                    </Grid>

                </Grid>
            </Grid>

            <Paper elevation={2} sx={{ width: '100%' }}>
                <Grid container sx={{ p: 5 }}>
                    <Grid item sm={12} xs={12} sx={{ py: 3 }}>
                        <BuildIcon />
                    </Grid>

                    <Typography variant="h4" >
                        Build any form in seconds
                    </Typography>
                    <Typography variant="h6" sx={{ pt: 2 }}>
                        Easily create online forms using our wide range of free input blocks. Collect contact info, files, signatures, payments, and much more. Build everything from surveys to quizzes to lead generation forms.
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
                        <b>Contact info.</b> Collect names, addresses, phone numbers, emails & links.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CreditCardIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Accept payments.</b> Create checkout forms without code.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <HistoryEduIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Signatures.</b> Accept e-signatures and streamline contract signing.
                    </Typography>
                </Grid>
            </Grid>


            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item sm={4}>
                    <Typography>
                        <EmojiEventsOutlinedIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Rate & rank. </b> Let users share their opinions using visually simple ratings, scales, and rankings.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <UploadFileIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>File uploads.</b> Collect images, PDFs, video and audio files.
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography>
                        <CalendarMonthIcon color="secondary" />
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Date & Time.</b> Allow respondents easily select date and time.
                    </Typography>
                </Grid>
            </Grid>


        </>
    )
}