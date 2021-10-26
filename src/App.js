import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import PortfolioContainer from './components/PortfolioContainer';
import background from './components/assets/images/background.jpg';


function App() {
  return (
    <>
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <PortfolioContainer />
      </div>
    </>
  );
}

export default App;
