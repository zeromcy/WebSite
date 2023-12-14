import { Link, Typography, Grid } from '@mui/material'
import { Linkedin, Reddit, Twitter, Yt, Fb } from './MyFootIcon';

export default function Copyright(props) {
  return (
    <>
      <Typography variant="body1" color="text.secondary"  {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Grid container columns={10} sx={{px:2,py:5}}>
        <Grid item sm={2}>
          <Twitter />
        </Grid>
        <Grid item sm={2}>
          <Reddit />
        </Grid>
        <Grid item sm={2}>
          <Linkedin />
        </Grid>
        <Grid item sm={2}>
          <Yt />
        </Grid>
        <Grid item sm={2}>
          <Fb />
        </Grid>





      </Grid>
    </>
  );
}