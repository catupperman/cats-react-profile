import React from 'react';
const headerStyle = { color: "red"}
function Header() {
    return (
      <header style={{margin: "70px"}} className="header">
        <h1 style = {headerStyle}>Welcome</h1>
      </header>
    );
  }
  
  export default Header;