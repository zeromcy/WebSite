import { Container } from '@mui/system';
import './App.css';
import AppBar from './components/home/appBar';
import Footer from './components/home/foot';
import Head from './components/home/head';
import SubOne from './components/home/sub1';
import SubTwo from './components/home/sub2';
import SubThree from './components/home/sub3';
import SubFour from './components/home/sub4';
import SubFive from './components/home/sub5';
import SubSix from './components/home/sub6';
import SubSeven from './components/home/sub7';
import SubEight from './components/home/sub8';
import SubNine from './components/home/sub9';
import { createTheme, Grid, ThemeProvider, useMediaQuery } from '@mui/material';
import LeftImage from './image/faces-left.png'
import RightImage from './image/faces-right.png'
import './css/leftRifht.css'


function App() {
  const theme = createTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <ThemeProvider theme={theme}>

      {/* bar */}
      <AppBar />

      {/* container */}
      <Grid container>
        {/* left image */}
        <Grid item sx={{display:{md:'flex',sm:'none',xs:'none'}}} md={1} order={1}>
          {
            match ?
              <div>
                <img src={LeftImage} alt='' width='301' height='1160' className='left_' />
              </div>
              :
              null
          }
        </Grid>

        <Grid item sm={12} xs={12} md={10} order={2}>
          <Container maxWidth='lg'
            sx={{ mt: 15 }}
          >
            {/* Header */}
            <Head />

            {/* sub1 */}
            <SubOne />

            {/* sub2 */}
            <SubTwo />

            {/* sub3 */}
            <SubThree />

            {/* sub4 */}
            <SubFour />

            {/* sub5 */}
            <SubFive />

            {/* sub6 */}
            <SubSix />

            {/* sub7 */}
            <SubSeven />

            {/* sub8 */}
            <SubEight />

            {/* sub9 */}
            <SubNine />
          </Container>
        </Grid>

        <Grid item sx={{display:{md:'flex',sm:'none',xs:'none'}}} md={1} order={3}>
          {/* right image */}
          {
            match ?
              <div>
                <img src={RightImage} alt='' width='301' height='1160' className='right' />
              </div>
              :
              null
          }
        </Grid>
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
