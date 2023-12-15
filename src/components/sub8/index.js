import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import StyledButton from "../commom/MyButton"
import Sub8Image from '../../image/roll-up-sleeves.png'
import '../../css/btn.css'
import '../../css/leftRifht.css'
import '../../css/sub8.css'
import LeftImage from '../../image/particles-left.png'
import RightImage from '../../image/particles-right.png'

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
                                <img src={LeftImage} alt='' width='164' height='862' className="left"/>
                            </div>
                        </Grid>
                        :
                        null
                }

                <Grid item sm={10}>
                    <Typography align='center' sx={{ mt: 15 }}>
                        <img src={Sub8Image} alt='' width='50%'></img>
                    </Typography>
                    <Typography variant="h2" align='center'>
                        Build stunning forms for free
                    </Typography>
                    <Typography variant="h5" align='center' color='text.secondary'>
                        Build stunning forms for freeIt’s as simple as one-two-three, and guess what? You don’t even need an account to try it out!
                    </Typography>

                    <Typography align='center' sx={{ mt: 5 }}>
                        <StyledButton className='btn' variant="contained">Create a free form</StyledButton>
                    </Typography>

                    <Typography variant="h4" align='center' sx={{ mt: 5 }} color='text.secondary'>
                        “Absolutely adore Tally! A game-changer - incredibly powerful, yet ridiculously user-friendly. It enabled me to effortlessly gather inputs, add forms with ease, and even pre-fill them. And the icing on the cake - absolutely free to use!”
                    </Typography>
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