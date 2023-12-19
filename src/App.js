import { Container } from '@mui/system';
import './App.css';
import AppBar from './components/home/appBar';
import Footer from './components/home/foot';
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import './css/leftRifht.css'
import { Home } from './components/home/home';
import About from './components/aboutus';
import Cookie from './components/cookie';
import Policy from './components/policy';
import Link from '@mui/material/Link';
import Terms from './components/terms';
import {
  MemoryRouter,
  Route,
  Link as RouterLink,
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

function MyRoute({ to, name }) {
  return (
    <MemoryRouter initialEntries={['/home']} initialIndex={0}>
      <Routes>
        <Route path='*' element={<Page to={to} name={name} />} />
      </Routes>
    </MemoryRouter>
  )
}

function Page({ to, name }) {
  return (
    <LinkRouter underline='hover' to={to}>{name}</LinkRouter>
  )
}

function LinkRouter() {
  return <Link component={RouterLink} />;
}

function RouteSeletor() {
  return (
    // <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/cookie' element={<Cookie />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/tp' element={<TP />} />
    </Routes>
    // </MemoryRouter>
  )
}

export default App;
export { Page, MyRoute }