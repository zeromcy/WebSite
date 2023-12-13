import {Link,Typography} from '@mui/material'

export default function Copyright(props) {
    return (
      <Typography variant="body1" color="text.secondary"  {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }