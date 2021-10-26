import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import PortfolioContainer from './components/PortfolioContainer';
import background from './components/assets/images/background.jpg';
import Footer from './components/pages/Footer';


function App() {
  return (
    <>
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <PortfolioContainer />
      <Footer />
      </div>
    </>
  );
}

export default App;
