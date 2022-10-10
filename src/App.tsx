import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Banner from './components/banner';
import MatchBar from './components/matchbar';
import Navbar from './components/navbar';
import GlobalStyle from './globalStyles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Banner></Banner>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "200vh" }}>
        <div style={{ position: "fixed", top: "5px" }}>
          <Navbar></Navbar>
          <MatchBar></MatchBar>
        </div>
      </div>
      <div id="team" style={{ height: '100vh', backgroundColor: 'red' }}>
        TEST Team
      </div>
    </ThemeProvider>
  );
}

export default App;
