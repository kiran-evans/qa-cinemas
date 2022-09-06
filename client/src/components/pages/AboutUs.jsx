import React from 'react'
import ScrumMethods from './about-page-components/ScrumMethods';
import MeetTheTeam from './about-page-components/MeetTheTeam';

const About = () => {

    return (
        <div className="aboutUs">
            <MeetTheTeam />

            <h2>Scrum Process</h2>
            <ScrumMethods />
            <a href="https://www.scrum.org/" rel="noreferrer noopener" target="_blank" title="Go to Scrum.org"><button>Scrum.org</button></a>
        </div>
        
    )
}

export default About
