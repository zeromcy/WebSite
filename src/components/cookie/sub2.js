import { Grid, Typography } from "@mui/material"
import { SubTitle2 } from "../home/commom/myTypography"


export default function Two() {
    return (
        <Grid container sx={{ my: 5 }}>
            <SubTitle2 content='What types of cookies does Tally use?' />
            <ul>
                <li>
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
                        <b>Required cookies:</b> Certain cookies are necessary in order for the website to operate correctly and remain secure. For example, we use cookies to authenticate you. When you log on to our website, authentication cookies are set which let us know who you are during a browsing session. We have to load essential cookies for legitimate interests pursued by us in delivering our Sites essential functionality to you.
                    </Typography>
                </li>
                <li>
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
                            pt: 5
                        }}>
                        <b>Analytical Cookies:</b> Analytics cookies collect information about your use of our site, and enable us to improve the way it works. We use Mixpanel to track user behavior in our product (only when you are logged in).
                        <ul>
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
                                We do not use Google Analytics to track forms made with Tally. We use a self-hosted and privacy-focussed web analytics solution that is GDPR compliant and does not use any cookies in the tracking code.
                            </Typography>
                        </ul>
                    </Typography>
                </li>
            </ul>
        </Grid>
    )
}