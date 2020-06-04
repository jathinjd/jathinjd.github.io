import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="section" id="aboutme">
                <h1>AboutMe Component</h1>
            </div>
        )
    }
}

export default AboutMe;