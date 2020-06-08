import React from 'react';
import './NavBar.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.welcomeLinkRef = React.createRef();
        this.aboutmeLinkRef = React.createRef();
        this.skillsLinkRef = React.createRef();
        this.educationLinkRef = React.createRef();
        this.experienceLinkRef = React.createRef();
        this.projectsLinkRef = React.createRef();
        this.contactLinkRef = React.createRef();
    }

    render() {
        return(
            <div id="navbar" className="navbar-container" ref={this.welcomeLinkRef}>
                <nav className="navbar-nav">
                    {/*<Typography variant="h6" className='navlink-element'>
                        <NavLink className="navlink-link" to={'/#welcome'} smooth>
                            Welcome
                        </NavLink>
                    </Typography>*/}
                    <Typography variant="h6" className='navlink-element' ref={this.aboutmeLinkRef}>
                        <NavLink className="navlink-link" to={'/#aboutme'} smooth>
                            About Me
                        </NavLink>
                    </Typography>
                    <Typography variant="h6" className='navlink-element' ref={this.skillsLinkRef}>
                        <NavLink className="navlink-link" to={'/#skills'} smooth>
                            Skills
                        </NavLink>
                    </Typography>
                    <Typography variant="h6" className='navlink-element' ref={this.educationLinkRef}>
                        <NavLink className="navlink-link" to={'/#education'} smooth>
                            Education
                        </NavLink>
                    </Typography>
                    <Typography variant="h6" className='navlink-element' ref={this.experienceLinkRef}>
                        <NavLink className="navlink-link" to={'/#experience'} smooth>
                            Experience
                        </NavLink>
                    </Typography>
                    <Typography variant="h6" className='navlink-element' ref={this.projectsLinkRef}>
                        <NavLink className="navlink-link" to={'/#projects'} smooth>
                            Projects
                        </NavLink>
                    </Typography>
                    <Typography variant="h6" className='navlink-element' ref={this.contactLinkRef}>
                        <NavLink className="navlink-link" to={'/#contact'} smooth>
                            Contact
                        </NavLink>
                    </Typography>
                </nav>
                <div className="navlink-right">
                    <a target="_blank" rel="noopener noreferrer" href={require("../../util/files/resume.pdf")}>
                        <Button variant="contained">
                            <Typography className="navlink-right-text">Resume</Typography>
                        </Button>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar;