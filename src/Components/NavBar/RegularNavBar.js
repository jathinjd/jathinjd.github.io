import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function RegularNavBar(){
    return (
        <div id="navbar-regular" className="navbar-regular">
            <nav className="navbar-nav">
                {/*<Typography variant="h6" className='navlink-element'>
                    <NavLink className="navlink-link" to={'/#welcome'} smooth>
                        Welcome
                    </NavLink>
                </Typography>*/}
                <Typography variant="h6" className='navlink-element' /*ref={this.aboutmeLinkRef}*/>
                    <NavLink className="navlink-link" to={'/me/#aboutme'} smooth>
                        About Me
                    </NavLink>
                </Typography>
                <Typography variant="h6" className='navlink-element' /*ref={this.skillsLinkRef}*/>
                    <NavLink className="navlink-link" to={'/me/#skills'} smooth>
                        Skills
                    </NavLink>
                </Typography>
                <Typography variant="h6" className='navlink-element' /*ref={this.educationLinkRef}*/>
                    <NavLink className="navlink-link" to={'/me/#education'} smooth>
                        Education
                    </NavLink>
                </Typography>
                <Typography variant="h6" className='navlink-element' /*ref={this.experienceLinkRef}*/>
                    <NavLink className="navlink-link" to={'/me/#experience'} smooth>
                        Experience
                    </NavLink>
                </Typography>
                <Typography variant="h6" className='navlink-element' /*ref={this.projectsLinkRef}*/>
                    <NavLink className="navlink-link" to={'/me/#projects'} smooth>
                        Projects
                    </NavLink>
                </Typography>
                <Typography variant="h6" className='navlink-element' /*ref={this.contactLinkRef}*/>
                    <NavLink className="navlink-link" to={'/me/#contact'} smooth>
                        Contact
                    </NavLink>
                </Typography>
            </nav>
            <div className="navbar-right">
                <a target="_blank" rel="noopener noreferrer" href={require("../../util/files/resume.pdf")}>
                    <Button variant="contained">
                        <Typography className="navbar-right-text">Resume</Typography>
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default RegularNavBar;