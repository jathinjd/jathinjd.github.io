import React from 'react';
import './NavBar.css';
import MobileNavBar from './MobileNavBar';
import RegularNavBar from './RegularNavBar';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        /*this.welcomeLinkRef = React.createRef();
        this.aboutmeLinkRef = React.createRef();
        this.skillsLinkRef = React.createRef();
        this.educationLinkRef = React.createRef();
        this.experienceLinkRef = React.createRef();
        this.projectsLinkRef = React.createRef();
        this.contactLinkRef = React.createRef();*/
    }

    render() {
        return(
            <div id="navbar" className="navbar-container" ref={this.welcomeLinkRef}>
                <MobileNavBar />
                <RegularNavBar />
            </div>                   
        );
    }
}

export default NavBar;