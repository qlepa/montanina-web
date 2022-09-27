import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Banner from './components/banner';
import Navbar from './components/navbar';
import GlobalStyle from './globalStyles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Banner></Banner>
      <Navbar></Navbar>
    </ThemeProvider>
  );
}

export default App;
