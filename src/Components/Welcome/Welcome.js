import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
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
            <div className="section" id="welcome" style={useStyles.sectionClass}>
                <h1>Welcome Component</h1>
            </div>
        )
    }
}

export default Welcome;