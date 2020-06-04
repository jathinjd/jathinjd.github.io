import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="aboutme-container" id="aboutme">
                <h1>AboutMe Component</h1>
            </div>
        )
    }
}

export default AboutMe;