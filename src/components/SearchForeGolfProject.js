import React from 'react';
import searchForeGolfImage from '../assets/images/search-fore-golf.jpeg';
import {Link} from 'react-router-dom';
const imageStyle={
    width: "35em",
    alignContent: "center"
}


function SearchForeGolf(){
    return (
        <div class="projects" id="project-examples">
            <h3>Projects</h3>
        
                <Link to="https://chemacenturion.github.io/Search-Fore-Golf/" target="_blank"> </Link>
                    <img style={imageStyle} src={searchForeGolfImage}></img>
                <p style={{textAlign: "center"}}> An interactive App that allows you to search for golf courses within your area, with corresponding
                    weather for that day. Like the golf course? Click the favortie button to save it to your local
                    storage for later retrieval. This was built using HTML, CSS, JavaScript, JQuery, Postman
                    application, OpenWeather API, and Yelp API. Check out the code: <Link to="https://github.com/chemacenturion/Search-Fore-Golf" target="_blank">Here</Link></p>
        </div>
    )
}

export default SearchForeGolf();