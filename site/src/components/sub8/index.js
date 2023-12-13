import { Typography, Button } from "@mui/material";
import Sub8Image from '../../image/roll-up-sleeves.png'

export default function SubEight() {

    return (
        <>
            <Typography align='center' sx={{mt:15}}>
                <img src={Sub8Image} alt='' width='50%'></img>
            </Typography>
            <Typography variant="h2" align='center'>
                Build stunning forms for free
            </Typography>
            <Typography variant="h5" align='center' color='text.secondary'>
                Build stunning forms for freeIt’s as simple as one-two-three, and guess what? You don’t even need an account to try it out!
            </Typography>

            <Typography align='center' sx={{ mt: 5 }}>
                <Button variant="contained">Create a free form</Button>
            </Typography>


            <Typography variant="h4" align='center' sx={{ mt: 5 }} color='text.secondary'>
                “Absolutely adore Tally! A game-changer - incredibly powerful, yet ridiculously user-friendly. It enabled me to effortlessly gather inputs, add forms with ease, and even pre-fill them. And the icing on the cake - absolutely free to use!”
            </Typography>
        </>
    )
}