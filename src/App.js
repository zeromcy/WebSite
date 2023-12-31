import { Container } from '@mui/system';
import './App.css';
import AppBar from './components/home/appBar';
import Footer from './components/home/foot';
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import './css/leftRifht.css'
import {
  Route,
  Routes,
  RouterProvider,
  useRoutes
} from 'react-router-dom';
import router,{routes} from './routes/routes';


function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>

      {/* bar */}
      <AppBar />

      {/* container */}
      <Grid container>
        {/* <RouteSeletor /> */}
        {/* <RouterProvider router={router}/> */}
        <R/>
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
  const getRoutes = (routes) => routes.map((route) =>{
    return <Route  path={route.path} element={route.element} />
  })
  return (
    <Routes>
      {getRoutes(routes)}
    </Routes>
  )
}

function R (){
  const element = useRoutes(routes)
  return element;
}
export default App;
