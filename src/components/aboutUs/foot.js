import { Grid, Typography } from "@mui/material";
import { MyDivider } from "./commom";

export default function Foot() {
    return (
        <>
            <Grid container>
                <Grid item sm={12} xs={12}>
                    <Typography>
                        We’re proud of how we run our business and help our customers.
                        And of course, we hope you’ll join us.
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant='h6'>
                        Marie & Filip,
                    </Typography>
                    <Typography>
                        Co-founders of Tally
                    </Typography>
                </Grid>
            </Grid>
            <MyDivider />
        </>
    )
}