import React from 'react';
import './ErrorPage.css';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="error404-container" id="error404">
                <h1>Error: 4040 Page Not Found</h1>
            </div>
        )
    }
}

export default ErrorPage;