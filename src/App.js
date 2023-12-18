import { Container } from '@mui/system';
import './App.css';
import AppBar from './components/home/appBar';
import Footer from './components/home/foot';
import { createTheme, Grid, ThemeProvider, useMediaQuery } from '@mui/material';
import './css/leftRifht.css'
import { Home } from './components/home/home';
import About from './components/aboutUs';
import Cookie from './components/cookie';
import Policy from './components/policy';


function App() {
  const theme = createTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <ThemeProvider theme={theme}>

      {/* bar */}
      <AppBar />

      {/* container */}
      <Grid container>
       {/* <Home /> */}
       {/* <About/> */}
       {/* <Cookie/> */}
       <Policy/>
      </Grid>


      {/* foot */}
      <Container maxWidth='lg'
        sx={{ my: 15 }}
      >
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
