import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function closeMenu() {
    if(document.getElementById("mobile-menu").classList.contains("navbar-mobile-menu")){
        document.getElementById("mobile-menu").classList.replace("navbar-mobile-menu", "navbar-mobile-menu-closed");
    }
}

function openMenu() {
    if(document.getElementById("mobile-menu").classList.contains("navbar-mobile-menu-closed")){
        document.getElementById("mobile-menu").classList.replace("navbar-mobile-menu-closed", "navbar-mobile-menu");
    }
}

function MobileNavBar() {
    return (
        <div id="navbar-mobile" className="navbar-mobile">
            <IconButton onClick={openMenu}>
                <MenuRoundedIcon />
            </IconButton>
            <div id="mobile-menu" className="navbar-mobile-menu-closed">{/*open classname is navbar-mobile-menu*/}
                <IconButton id="mobile-menu-close">
                    <CloseIcon onClick={closeMenu} />
                </IconButton>
                <ul>
                    <li onClick={closeMenu}>
                        {/*<Typography variant="h6" className='navlink-element-mobile'>
                            <NavLink className="navlink-link" to={'/#welcome'} smooth>
                                Welcome
                            </NavLink>
                        </Typography>*/}
                    </li>
                    <li onClick={closeMenu}>
                        <Typography variant="h6" className='navlink-element-mobile' /*ref={this.aboutmeLinkRef}*/>
                            <NavLink className="navlink-link" to={'/me/#aboutme'} smooth>
                                About Me
                            </NavLink>
                        </Typography>
                    </li>
                    <li onClick={closeMenu}>
                        <Typography variant="h6" className='navlink-element-mobile' /*ref={this.skillsLinkRef}*/>
                            <NavLink className="navlink-link" to={'/me/#skills'} smooth>
                                Skills
                            </NavLink>
                        </Typography>
                    </li>
                    <li onClick={closeMenu}>
                        <Typography variant="h6" className='navlink-element-mobile' /*ref={this.educationLinkRef}*/>
                            <NavLink className="navlink-link" to={'/me/#education'} smooth>
                                Education
                            </NavLink>
                        </Typography>
                    </li>
                    <li onClick={closeMenu}>
                        <Typography variant="h6" className='navlink-element-mobile' /*ref={this.experienceLinkRef}*/>
                            <NavLink className="navlink-link" to={'/me/#experience'} smooth>
                                Experience
                            </NavLink>
                        </Typography>
                    </li>
                    <li onClick={closeMenu}>
                        <Typography variant="h6" className='navlink-element-mobile' /*ref={this.projectsLinkRef}*/>
                            <NavLink className="navlink-link" to={'/me/#projects'} smooth>
                                Projects
                            </NavLink>
                        </Typography>
                    </li>
                    <li onClick={closeMenu}>
                        <Typography variant="h6" className='navlink-element-mobile' /*ref={this.contactLinkRef}*/>
                            <NavLink className="navlink-link" to={'/me/#contact'} smooth>
                                Contact
                            </NavLink>
                        </Typography>
                    </li>
                    <li onClick={closeMenu}>
                        <a target="_blank" className="navlin-element-mobile" rel="noopener noreferrer" href={require("../../util/files/resume.pdf")}>
                            <Button variant="contained">
                                <Typography className="navbar-right-text">Resume</Typography>
                            </Button>
                        </a>
                    </li>
                </ul>
            </div>  
        </div>
    )
}

export default MobileNavBar;