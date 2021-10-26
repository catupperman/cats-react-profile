import React from 'react';
import LinkedInImage from '../assets/images/linkedin-icon.jpeg';
import ResumeImage from '../assets/images/resume-icon.jpg';
import GitHubImage from '../assets/images/githubicon.jpeg';
import CatsResume from '../assets/images/CatsResume.pdf'

const imageStyle={
    width: "18em",
    borderRadius: "50%",
    alignItems: "center"
}

function Resume() {
    return (
        <div>
            <h3 style={{textAlign: "center"}}> Contact Infomation </h3>
            <h5 style={{textAlign: "center"}}> Email</h5>
            <p style={{textAlign: "center"}}>catupperman@gmail.com</p>
            <a href="http://linkedin.com/in/catherine-upperman-370a97a8" target="_blank"> <img style={imageStyle} src={LinkedInImage}/></a>
            <a href="https://github.com/catupperman" target="_blank"> <img style={imageStyle} src={GitHubImage}/> </a>
            <a href={CatsResume} target="_blank"> <img style={imageStyle} src={ResumeImage}/> </a>
        </div>
    )
}

export default Resume;