import React from 'react';
import BevViberImage from '../assets/images/bev-viber.jpeg';
import {Link} from 'react-router-dom';

function BevViber(){
    return (
        <div class="card">
        <Link to="https://guarded-meadow-10732.herokuapp.com/" target="_blank"> </Link>
        <img src={BevViberImage}></img>
        <p> An App for coffee and tea aficionados, which will generate a random coffee or tea beverage of your choice, after signing up or logging into the app. This app was built using HTML, CSS, JavaScript, node.js, Insomina for testing, GitHub for collaboration, Handlebars, and Heroku for deployment. <Link to="https://github.com/shobes572/The_Beverage_Viber " target="_blank">Here</Link> </p>
    </div>  
    )
}

export default BevViberImage();