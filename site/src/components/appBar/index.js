import { Button, Grid } from "@mui/material"
import '../../css/btn.css'


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
                    <Button variant="text"  className="btn">Pricing</Button>
                    <Button variant="text"  className="btn">Log in</Button>
                    <Button variant="text"  className="btn">Sign up</Button>
                    <Button variant="contained" className="btn" >Create form</Button>
                </Grid>
            </Grid>
        </>
    )
}