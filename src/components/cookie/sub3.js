import { Grid, Typography } from "@mui/material"
import { SubTitle2 } from "../home/commom/myTypography"


export default function Three() {
    return (
        <Grid container sx={{ my: 5 }}>
            <SubTitle2 content='How can you block or eliminate cookies?' />
            <Typography
                color='text.secondary'
                sx={{
                    typography: {
                        xs: 'body1',
                        sm: 'body1',
                        md: 'body1',
                        lg: 'body1',
                        xl: 'body1',
                    },
                    pt: 1
                }}>
                We only use cookies when you are logged into our service. When creating an account you will be asked to accept our terms and conditions.
            </Typography>
            <Typography
                color='text.secondary'
                sx={{
                    typography: {
                        xs: 'body1',
                        sm: 'body1',
                        md: 'body1',
                        lg: 'body1',
                        xl: 'body1',
                    },
                    pt: 1
                }}>
                You can allow, eliminate, or block cookies in your computer's configuration settings according the internet browser you are using. In certain cases, some web services will be blocked when certain cookies are not allowed to operate correctly or when they are blocked by the user.
            </Typography>
        </Grid>
    )
}