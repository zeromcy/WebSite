import { Container } from '@mui/system';
import './App.css';
import AppBar from './components/home/appBar';
import Footer from './components/home/foot';
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import './css/leftRifht.css'
import { Home } from './components/home/home';
import About from './components/aboutus';
import Cookie from './components/cookie';
import Policy from './components/privacy';
import Terms from './components/terms';
import {
  Route,
  Routes
} from 'react-router-dom';
import TP from './components/terms&privacy';


function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>

      {/* bar */}
      <AppBar />

      {/* container */}
      <Grid container>
        {/* <Home /> */}
        {/* <About/> */}
        {/* <Cookie/> */}
        {/* <Policy/> */}
        {/* <Terms/> */}
        <RouteSeletor />
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



function RouteSeletor() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/cookie' element={<Cookie />} />
      <Route path='/privacy' element={<Policy />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/tp' element={<TP />} />
    </Routes>
  )
}

export default App;
