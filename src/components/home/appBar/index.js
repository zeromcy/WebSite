import { Grid } from "@mui/material"
import '../../../css/btn.css'
import StyledButton from "../commom/MyButton"
import LogoIcon from '../../../image/logo_v2.png'


export default function AppBar() {

    return (
        <>
            <Grid container
                sx={{
                    my: 2
                }}
            >
                <Grid item sm={3} xs={3} sx={{ pl: 2 }}>
                    <img src={LogoIcon} alt='' width="70" height='28'></img>
                </Grid>
                <Grid item sm={9} xs={9}>
                    <Grid container
                        sx={{
                            justifyContent: 'flex-end',
                            pr:2
                        }}>

                        <StyledButton variant="text" className="btn">Pricing</StyledButton>
                        <StyledButton variant="text" className="btn">Log in</StyledButton>
                        <StyledButton variant="text" className="btn">Sign up</StyledButton>
                        <StyledButton variant="contained" className="btn" >Create form</StyledButton>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}