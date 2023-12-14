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
import {  createTheme, ThemeProvider } from '@mui/material';




function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>

      {/* bar */}
      <AppBar />

      {/* container */}
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
