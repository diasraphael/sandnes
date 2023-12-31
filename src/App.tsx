import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import Footer from './components/footer/Footer';
import LandingPage from './components/landingPage/LandingPage';
import Vision from './components/vision/Vision';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Promise from './components/promise/Promise';
//import Events from './components/events/Events';

const theme = createTheme({
  typography: {
    fontFamily: ['Cormorant Infant', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <div className="relative">
      <Header></Header>
      <LandingPage></LandingPage>
      <Welcome></Welcome>
      <ThemeProvider theme={theme}>
        <Vision></Vision>
      </ThemeProvider>
      {/* <Events></Events> */}
      <Promise></Promise>
      <Footer></Footer>
    </div>
  );
}

export default App;
