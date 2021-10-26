import React from 'react';
const headerStyle = { 
  color: "black", 
  textAlign: "center",
  alignContent: "center"
}
function Header() {
    return (
      <header style={{margin: "50px"}} className="header">
        <h1 style = {headerStyle}>"Pseudo Cat's Coding"</h1>
      </header>
    );
  }
  
  export default Header;