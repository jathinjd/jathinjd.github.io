import React from 'react';
import './Education.css';

class Education extends React.Component {
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
            <div className="section" id="education" style={useStyles.sectionClass}>
                <h1>Education Component</h1>
            </div>
        )
    }
}

export default Education;