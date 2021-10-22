import React from 'react';
import aboutMeImage from '../assets/images/aboutmephoto.JPG'
const imageStyle={
    width: "18em",
    borderRadius: "50%",
    alignContent: "center"
}

function AboutMe() {
    return (
        <div id="about-info">
            <h3 style={{textAlign: "center"}}>About Me</h3>
            <img style={imageStyle} src={aboutMeImage}></img>
            <p> Hello there! My name is Catherine, but everyone calls me 'Cat'. This is a showcase of my front end
                development, thus far in my coding journey. It was baby steps that brought me into the coding world. I
                had always had a flair for Art and Science. I love to paint, especially trees, and have recieved a BA in
                Health Care Administration. So, coding?</p>

                <p>Well, there was always soemthing pulling at me to create, and
                build. During the pandemic, I fell in love with coding, but I wanted more. I decided to take the plunge
                and attend the UPenn Full Stack Developer Boot Camp (pending certification November 2021) Coding is a
                beautiful blend of art, science, and frustration. Complex enough to make your head spin, but beautiful
                enough to bring you back one keyboard stroke at a time. </p>
        </div>
    )
}

export default AboutMe;