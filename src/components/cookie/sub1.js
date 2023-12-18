import { Grid,Typography } from "@mui/material"
import {  SubTitle2 } from "../home/commom/myTypography"


export default function One() {
    return (
        <Grid container sx={{ my: 5 }}>
            <SubTitle2 content='What are cookies?' />
            <Typography color='text.secondary'
                sx={{
                    typography: {
                        xs: 'body1',
                        sm: 'body1',
                        md: 'body1',
                        lg: 'body1',
                        xl: 'body1',
                    },
                    pt: 1
                }} >
                Cookies are small text files that are placed on your computer or mobile device by websites you visit. They are widely used in order to make a website work, or work more efficiently, as well as to provide information to the owners of the site. These cookies contain a unique code which allows us to recognize your browser during your visit to our website ( so-called a 'session' cookie) or later, repeated visits (so-called permanent cookies). The content of a cookie usually consists of the name of the server that placed the cookie, an expiration date and a unique numeric code.
            </Typography>
            <Typography color='text.secondary'
                sx={{
                    typography: {
                        xs: 'body1',
                        sm: 'body1',
                        md: 'body1',
                        lg: 'body1',
                        xl: 'body1',
                    },
                    pt: 1
                }} >
                Based on your surfing habits, a cookie remembers your preferences. These personal interests are stored on the hard drive of your computer. Cookies make the interaction between you, the visitor, and the website easier, faster and help you to navigate between the different parts of a website. Cookies are also used to make the content of, or the publicity on a website more relevant for the visitor. Finally, a cookie will ensure that the content is adaptable to your personal taste and needs.
            </Typography>
        </Grid>
    )
}