import React from 'react';
import BevViberImage from '../assets/images/bev-viber.jpeg';
const imageStyle={
    width: "20em",
    alignContent: "center"
}



function BevViber() {
    return (
        <div class="card">
        <a href="https://guarded-meadow-10732.herokuapp.com/"></a>
        <img style={imageStyle} src={BevViberImage}></img>
        <p style={{textAlign: "center"}}> An App for coffee and tea aficionados, which will generate a random coffee or tea beverage of your choice, after signing up or logging into the app. This app was built using HTML, CSS, JavaScript, node.js, Insomina for testing, GitHub for collaboration, Handlebars, and Heroku for deployment.</p>
        
        
         {/* <Link to="https://github.com/shobes572/The_Beverage_Viber " target="_blank">Here</Link>  */ }
    </div >  
    )
}

export default BevViber;