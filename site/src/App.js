import { Container } from '@mui/system';
import './App.css';
import AppBar from './components/appBar';
import Footer from './components/foot';
import Head from './components/head';
import SubOne from './components/sub1';
import SubTwo from './components/sub2';
import SubThree from './components/sub3';
import SubFour from './components/sub4';
import SubFive from './components/sub5';
import SubSix from './components/sub6';
import SubSeven from './components/sub7';
import SubEight from './components/sub8';
import SubNine from './components/sub9';
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
        <Grid item sm={2} xs={2}>
          {
            match ?
              <div>
                <img src={LeftImage} alt='' width='301' height='1160' className='left' />
              </div>
              :
              null
          }
        </Grid>

        <Grid item sm={8} xs={8}>
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

        <Grid item sm={2} xs={2}>
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
