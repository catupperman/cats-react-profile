import React from 'react';
import BevViberImage from '../assets/images/bev-viber.jpeg';
import SearchForeGolfImage from '../assets/images/search-fore-golf.jpeg';
import TeamGenerator from '../assets/images/team-generator.jpeg'


//eventual css file
const imageStyle = {
    width: "20em",
    alignContent: "center"
}


//links to projects, with photos to demonstrate work
function Projects() {
    return (
        <div>
            <div class="card">
                <a href="https://guarded-meadow-10732.herokuapp.com/" target="_blank">Visit the App Here</a>
                <img style={imageStyle} src={BevViberImage}></img>
                <p style={{ textAlign: "center" }}> An App for coffee and tea aficionados, which will generate a random coffee or tea beverage of your choice, after signing up or logging into the app. This app was built using HTML, CSS, JavaScript, node.js, Insomina for testing, GitHub for collaboration, Handlebars, and Heroku for deployment.</p>

                <a href="https://github.com/shobes572/The_Beverage_Viber " target="_blank">Check Out the Code Here</a>
            </div >
            <div class="card">
                <a href="https://chemacenturion.github.io/Search-Fore-Golf/" target="_blank">Visit the App Here</a>
                <img style={imageStyle} src={SearchForeGolfImage}></img>
                <p> An interactive App that allows you to search for golf courses within your area, with corresponding
                weather for that day. Like the golf course? Click the favortie button to save it to your local
                storage for later retrieval. This was built using HTML, CSS, JavaScript, JQuery, Postman application, OpenWeather API, and Yelp API. </p>
                <a href="https://github.com/chemacenturion/Search-Fore-Golf" target="_blank">Check Out the Code Here</a>
            </div>
            <div class="card">
                <a href="https://drive.google.com/file/d/1ZFlSI836BfGt1yMFuuZbSZlBj331_1CH/view" target="_blank">Visit App Here</a>
                <img style={imageStyle} src={TeamGenerator}></img>
                    <p> This backend application runs through the terminal to generate a team profile page, by asking the user specific questions.  This application was built using HTML, CSS, JavaScript, Node.js, and run through npm testing.  Video of application is was created using Screencastify.</p>
                    <a href="https://github.com/catupperman/team-profile-generator" target="_blank">Check Out the Code Here</a>
            </div>
            

        </div>
    )
}

export default Projects;