import React from 'react';
const headerStyle = { 
  color: "black", 
  textAlign: "center",
  alignContent: "center"
}
function Header() {
    return (
      <header className="header">
        <h1 style = {headerStyle}>Cat's Coding</h1>
      </header>
    );
  }
  
  export default Header;