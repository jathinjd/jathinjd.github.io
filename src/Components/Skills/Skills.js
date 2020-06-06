import React from 'react';
import './Skills.css';

class Skills extends React.Component {
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
            <div className="section" id="skills" style={useStyles.sectionClass}>
                <h1>Skills Component</h1>
            </div>
        )
    }
}

export default Skills;