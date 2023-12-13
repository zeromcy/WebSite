import { Grid, Typography , Link, styled } from "@mui/material"
import LogoImage from '../../image/logo_v2.png'
import Copyright from "./copyright"


const StyledLink = styled(Link)(()=>({
    '&':{
        color:'inherit',
        textDecoration:'none',
    }
}))

const StyledTypography = styled(Typography)(()=>({
    '&':{
        width:'208px',
        
    }
}))
export default function Footer() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={3}>
                    <Grid container>
                        <Grid item sm={12}>
                            <img src={LogoImage} alt="" width="30%"></img>
                        </Grid>
                        <Grid item sm={12}
                            sx={{ mt: 5 }}
                        >
                            <Copyright />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={2}></Grid>
                <Grid item sm={2}>
                    <StyledTypography variant='body1' >
                        Product
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Feature
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Pricing
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            What's new
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Roadmap
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Feature
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Feedback
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Templates
                        </StyledLink>
                    </StyledTypography>
                </Grid>

                <Grid item sm={2}>
                    <StyledTypography variant='body1' >
                        Help
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Get started
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            How-to guides
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Help center
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Contact support
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Hire an export
                        </StyledLink>
                    </StyledTypography>

                    <StyledTypography variant='body1' sx={{mt:5}} >
                        Company
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            About us
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Blog
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Media kit
                        </StyledLink>
                    </StyledTypography>
                   
                </Grid>

                <Grid item sm={2}>
                    <StyledTypography variant='body1' >
                        Resources
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Jion the community
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Fair use policy
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            GDPR
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Terms & Privacy
                        </StyledLink>
                    </StyledTypography>

                    <StyledTypography variant='body1' sx={{mt:5}}>
                        Compare
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Typeform alternative
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Jotform alternative
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Google Froms alternative
                        </StyledLink>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <StyledLink>
                            Best Free online form builders
                        </StyledLink>
                    </StyledTypography>
                    
                </Grid>
            </Grid>
        </>
    )
}