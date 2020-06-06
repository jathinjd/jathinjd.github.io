import React from 'react';
import './Contact.css';

class Contact extends React.Component {
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
            <div className="section" id="contact" style={useStyles.sectionClass}>
                <h1>Contact Component</h1>
            </div>
        )
    }
}

export default Contact;