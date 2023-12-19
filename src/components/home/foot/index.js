import { Grid, Typography, Link, styled } from "@mui/material"
import LogoImage from '../../../image/logo_v2.png'
import Copyright from "./copyright"


const StyledLink = styled(Link)(() => ({
    '&': {
        color: 'inherit',
        textDecoration: 'none',
    }
}))

function MyNav({to,name}){
    return (
        <StyledLink underline='hover' href={to} target="_blank">{name}</StyledLink>
    )
}
const StyledTypography = styled(Typography)(() => ({
    '&': {
        width: '208px',
    }
}))
export default function Footer() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={4}>
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

                <Grid item sm={8} md={1}></Grid>
                <Grid item md={2} sm={4} xs={12}>
                    <StyledTypography variant='body1' >
                        Product
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name='Feature'>
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name='Pricing'>
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="What's new">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Roadmap">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav>
                            Feature
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Feedback">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Templates">
                        </MyNav>
                    </StyledTypography>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                    <StyledTypography variant='body1' >
                        Help
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Get started">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="How-to guides">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Help center">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Contact support">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Hire an export">
                        </MyNav>
                    </StyledTypography>

                    <StyledTypography variant='body1' sx={{ mt: 5 }} >
                        Company
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav to='/about' name=' About us'></MyNav>

                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav to="http://192.168.100.251:8080" name='Blog'>
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name=" Media kit">
                        </MyNav>
                    </StyledTypography>

                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                    <StyledTypography variant='body1' >
                        Resources
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name=" Join the community">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Fair use policy">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav>
                            GDPR
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav to='/tp' name="Terms & Privacy">
                        </MyNav>
                    </StyledTypography>

                    <StyledTypography variant='body1' sx={{ mt: 5 }}>
                        Compare
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Typeform alternative">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Jotform alternative">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name=" Google Froms alternative">
                        </MyNav>
                    </StyledTypography>
                    <StyledTypography variant='body2' color='text.secondary'>
                        <MyNav name="Best Free online form builders">
                        </MyNav>
                    </StyledTypography>

                </Grid>
            </Grid>
        </>
    )
}