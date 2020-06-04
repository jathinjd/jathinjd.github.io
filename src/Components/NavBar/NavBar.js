import React from 'react';
import './NavBar.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Button } from 'material-ui-core';

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

    componentDidMount(){
        const activeSectionLinkRef = this.props.activeSection + "LinkRef";
        this[activeSectionLinkRef].current.getElementsByTagName('a')[0].classList.add('active-link');
    }

    componentDidUpdate(prevProps){ 
        if(this.props.activeSection !== prevProps.activeSection){
            const activeSectionLinkRef = this.props.activeSection + "LinkRef";
            const prevActiveSectionLinkRef = prevProps.activeSection + "LinkRef";
            this[prevActiveSectionLinkRef].current.getElementsByTagName('a')[0].classList.remove('active-link');
            this[activeSectionLinkRef].current.getElementsByTagName('a')[0].classList.add('active-link');
        }
    }

    render() {
        return(
            <div id="navbar" className="navbar-container">
                <nav className="navbar-nav">
                    <Button className='navlink-button' ref={this.welcomeLinkRef}>
                        <NavLink to={'/#welcome'} smooth>
                            Welcome
                        </NavLink>
                    </Button>
                    <Button className='navlink-button' ref={this.aboutmeLinkRef}>
                        <NavLink to={'/#aboutme'} smooth>
                            About Me
                        </NavLink>
                    </Button>
                    <Button className='navlink-button' ref={this.skillsLinkRef}>
                        <NavLink to={'/#skills'} smooth>
                            Skills
                        </NavLink>
                    </Button>
                    <Button className='navlink-button' ref={this.educationLinkRef}>
                        <NavLink to={'/#education'} smooth>
                            Education
                        </NavLink>
                    </Button>
                    <Button className='navlink-button' ref={this.experienceLinkRef}>
                        <NavLink to={'/#experience'} smooth>
                            Experience
                        </NavLink>
                    </Button>
                    <Button className='navlink-button' ref={this.projectsLinkRef}>
                        <NavLink to={'/#projects'} smooth>
                            Projects
                        </NavLink>
                    </Button>
                    <Button className='navlink-button' ref={this.contactLinkRef}>
                        <NavLink to={'/#contact'} smooth>
                            Contact
                        </NavLink>
                    </Button>
                </nav>
            </div>
        )
    }
}

export default NavBar;