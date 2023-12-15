import StyledButton from "../commom/MyButton"
import { Typography, Grid, Paper, Divider, Toolbar } from "@mui/material";
import NotionImage from '../../image/notion.png'
import BuyImage from '../../image/buy-me-a-coffee.png'
import MakeImage from '../../image/make.png'
import RakutenImage from '../../image/rakuten.png'
import GlovoImage from '../../image/glovo.png'
import FootIcon from "./footIcon";
import headVideo from '../../video/head.mp4'
import { CircleIcon } from "./circleIcon";
import { useTheme, useMediaQuery } from '@mui/material'
import FacePhoneImage from '../../image/faces-mobile.png'


export default function Head() {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <>
            {
                match ?
                    null :
                    <Typography align="center">
                        <img src={FacePhoneImage} alt='' width='100%' height='100%' />
                    </Typography>

            }
            <Typography variant="h2" gutterBottom align="center">
                The simplest way to create forms
            </Typography>
            <Grid container
                sx={{ justifyContent: 'center' }}>
                <Grid item>
                    <Typography variant="h6"
                        align="center"
                        sx={{
                            maxWidth: '600px'
                        }}
                    >
                        The simplest way to create formsSay goodbye to boring forms. Meet Tally — the free, intuitive form builder you’ve been looking for.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container
                sx={{
                    justifyContent: 'center',
                    my: 10
                }}>
                <StyledButton variant="contained" className="btn">Create free form</StyledButton>
            </Grid>

            <Grid container sx={{
                // justifyContent: 'center',
                mb: 5
            }}>
                
                <Paper elevation={3} >
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
                    <video playsinline="" autoplay="" muted="" loop="" width="100%" src={headVideo}></video>
                </Paper>
            </Grid>

            <Grid container
                spacing={3}
                sx={{
                    justifyContent: {md:'flex-start',xs:'center',sm:'center'}
                }}>

                <FootIcon url={NotionImage} mt={2} />
                <FootIcon url={BuyImage} mt={3.5} />
                <FootIcon url={MakeImage} mt={3.5} />
                <FootIcon url={GlovoImage} mt={2} />
                <FootIcon url={RakutenImage} mt={3} />


            </Grid>
        </>
    )
}