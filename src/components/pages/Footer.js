import React from 'react';
import LinkedInImage from '../assets/images/linkedin-icon.jpeg';
import ResumeImage from '../assets/images/resume-icon.jpg';
import GitHubImage from '../assets/images/githubicon.jpeg';
import CatsResume from '../assets/images/CatsResume.pdf';
import '../styles/Footer.css'

const imageStyle={
    width: "5em",
    borderRadius: "50%",
    margin: "2px", 
    maxWidth: "60px",
    maxHeight: "50px"
}

function Footer() {
    return (
        <footer>
            <a href="http://linkedin.com/in/catherine-upperman-370a97a8" target="_blank"> <img style={imageStyle} src={LinkedInImage}/></a>
            <a href="https://github.com/catupperman" target="_blank"> <img style={imageStyle} src={GitHubImage}/> </a>
            <a href={CatsResume} target="_blank"> <img style={imageStyle} src={ResumeImage}/> </a>
            <h3 style={{marginLeft: "5px"}}> Contact Infomation: Email: catupperman@gmail.com</h3>
        </footer>
    )
}

export default Footer;