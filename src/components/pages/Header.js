import React from 'react';
import '../styles/Header.css'

//move to separate file
const headerStyle = { 
  color: "black", 
  textAlign: "center",
  alignContent: "center"
}

//header- needs some css work
function Header() {
    return (
      <header className="header">
        <h1 style = {headerStyle}>Cat's Coding</h1>
      </header>
    );
  }
  
  export default Header;