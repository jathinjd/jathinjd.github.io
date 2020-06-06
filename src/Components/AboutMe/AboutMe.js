import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        return(
            <div className="section" id="aboutme" style={useStyles.sectionClass}>
                <h1>AboutMe Component</h1>
            </div>
        )
    }
}

export default AboutMe;