import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="welcome-container" id="welcome">
                <h1>Welcome Component</h1>
            </div>
        )
    }
}

export default Welcome;