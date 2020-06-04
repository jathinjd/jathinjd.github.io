import React from 'react';
import './NavBar.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Button } from 'material-ui-core';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="navbar" className="navbar-container">
                <nav className="navbar-nav">
                    <Button>
                        <NavLink to={'/#welcome'} activeClassName='active' smooth>
                            Welcome
                        </NavLink>
                    </Button>
                    <NavLink to={'/#aboutme'} activeClassName='active' smooth>
                        About Me
                    </NavLink>
                    <NavLink to={'/#skills'} activeClassName='active' smooth>
                        Skills
                    </NavLink>
                    <NavLink to={'/#education'} activeClassName='active' smooth>
                        Education
                    </NavLink>
                    <NavLink to={'/#experience'} activeClassName='active' smooth>
                        Experience
                    </NavLink>
                    <NavLink to={'/#projects'} activeClassName='active' smooth>
                        Projects
                    </NavLink>
                    <NavLink to={'/#contact'} activeClassName='active' smooth>
                        Contact
                    </NavLink>
                </nav>
            </div>
        )
    }
}

export default NavBar;