import React from 'react';
import aboutMeImage from '../assets/images/aboutmephoto.JPG'
const imageStyle={
    width: "18em",
    borderRadius: "50%",
    alignItems: "center"
}

function AboutMe() {
    return (
        <div id="about-info">
            <h3 style={{textAlign: "center"}}>About Me</h3>
            <img style={imageStyle} src={aboutMeImage}></img>
            <p className= "para-one"> Hello there! My name is Catherine, better known as 'Cat'. This is a showcase of my full stack web
                development, thus far in my coding journey.  I had always had a flair for Art and Science, and have a love for painting. Career wise, I have recieved a BA in Health Care Administration from the University of Arizona Global Campus in 2016, worked in finance as well as health care, and have a history of working closely with upper management . So, coding?</p>

                <p style={{textAlign: "center"}}>Well, there was always soemthing pulling at me to create, and
                build. During the pandemic, I fell in love with coding, but I wanted more. I decided to take the plunge
                to attend the UPenn Full Stack Developer Boot Camp, and graduated November 13th, 2021.  Coding is a
                beautiful blend of art, science, and frustration. Complex enough to make your head spin, but beautiful
                enough to bring you back one keyboard stroke at a time. </p>
        </div>
    )
}

export default AboutMe;