import { Container, Grid, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container>
            <Grid Container>
                <Typography variant='h3'align='center'>Oops!</Typography>
                <Typography variant="body1" align='center'>Sorry, an unexpected error has occurred.</Typography>
                <Typography variant="body1" align='center'>
                    <i>{error.statusText || error.message} 404</i>
                </Typography>
            </Grid>
        </Container>
    );
}