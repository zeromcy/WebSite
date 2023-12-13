import {  Grid } from "@mui/material"
import '../../css/btn.css'
import StyledButton from "../commom/MyButton"

export default function AppBar() {

    return (
        <>
            <Grid container
                sx={{
                    justifyContent: 'flex-end',
                    my: 2
                }}
            >
                <Grid item
                sx={{
                    mr:2
                }}
                >
                    <StyledButton variant="text"  className="btn">Pricing</StyledButton>
                    <StyledButton variant="text"  className="btn">Log in</StyledButton>
                    <StyledButton variant="text"  className="btn">Sign up</StyledButton>
                    <StyledButton variant="contained" className="btn" >Create form</StyledButton>
                </Grid>
            </Grid>
        </>
    )
}