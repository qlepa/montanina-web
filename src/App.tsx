import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Banner from './components/banner';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Banner></Banner>
    </ThemeProvider>
  );
}

export default App;
