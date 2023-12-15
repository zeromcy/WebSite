import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import StyledButton from "../commom/MyButton"
import Sub8Image from '../../image/roll-up-sleeves.png'
import '../../css/btn.css'
import '../../css/leftRifht.css'
import '../../css/sub8.css'
import LeftImage from '../../image/particles-left.png'
import RightImage from '../../image/particles-right.png'
import { FootContent } from "../commom/myTypography";


export default function SubEight() {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <>
            <Grid container>
                {
                    match ?
                        <Grid item sm={1}>
                            <div>
                                <img src={LeftImage} alt='' width='164' height='862' className="left" />
                            </div>
                        </Grid>
                        :
                        null
                }

                <Grid item sm={10}>
                    <Typography align='center' sx={{ mt: 15 }}>
                        <img src={Sub8Image} alt='' width='50%'></img>
                    </Typography>
                    <Typography variant="h2" align='center'
                        sx={{
                            fontSize: {
                                xs: '26px',
                                sm: '32px',
                                md: '32px',
                                lg: '50px',
                                xl: '64px',
                            },
                            fontWeight: 900
                        }}
                    >
                        Build stunning forms for free
                    </Typography>
                    <Typography variant="h5" align='center' color='text.secondary'
                        sx={{
                            fontSize: {
                                xs: '16px',
                                sm: '16px',
                                md: '16px',
                                lg: '22px',
                                xl: '22px',
                            },
                        }}
                    >
                        Build stunning forms for freeIt’s as simple as one-two-three, and guess what? You don’t even need an account to try it out!
                    </Typography>

                    <Typography align='center' sx={{ mt: 5 }}>
                        <StyledButton className='btn' variant="contained">Create a free form</StyledButton>
                    </Typography>

                   
                    <FootContent
                    content={'“Absolutely adore Tally! A game-changer - incredibly powerful, yet ridiculously user-friendly. It enabled me to effortlessly gather inputs, add forms with ease, and even pre-fill them. And the icing on the cake - absolutely free to use!”'}>
                    </FootContent>
                </Grid>

                {
                    match ?
                        <Grid item sm={1}>
                            <div>
                                <img src={RightImage} alt='' width='225' height='821' />
                            </div>
                        </Grid>
                        :
                        null
                }


            </Grid>

        </>
    )
}