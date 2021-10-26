import React from 'react';
import ResumeImage from '../assets/images/resume-icon.jpg';
import CatsResume from '../assets/images/CatsResume.pdf'
import Footer from './Footer';

const imageStyle={
    width: "18em",
    borderRadius: "50%",
    alignItems: "center"
}

function Resume() {
    return (
        <div>
            <h3> Proficiencies </h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>node</li>
                <li>express</li>
                <li>JQuery</li>
                <li>React</li>
            </ul>
            <h3> Tech I've Dabbled With </h3>
            <ul>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>bcrypt</li>
                <li>PWAs</li>
                <li>MongoDB</li>
            </ul>
            <a href={CatsResume} target="_blank"> <img style={imageStyle} src={ResumeImage}/> </a>
        </div>
    )
}

export default Resume;