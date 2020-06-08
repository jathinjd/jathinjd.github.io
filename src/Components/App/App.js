import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Welcome from '../Welcome/Welcome';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const sectionIds = ["welcome", "aboutme", "skills", "education",
                    "experience", "projects", "contact"];

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      navbarHeight: 0
    }
  }

  componentDidMount(){
    this.setState({navbarHeight: document.getElementById('navbar').getBoundingClientRect().height});
  }

  /*stickNavBar(){
    const isTop = window.scrollY > document.getElementById('navbar').getBoundingClientRect().height;
    const nav = document.getElementById('navbar');
    if(isTop){
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.stickNavBar);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }*/

  render() {

    const theme = createMuiTheme({
      typography: {
        fontFamily: [
          'Vollkorn',
          'serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    });

    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
        <Router>
            <NavBar className="app-navbar" activeSection={"placeholder"} />
            <Switch>
              <Route exact path="/">
                {
                  //ids for top element for each componenet are defined inside
                  //the render return's wrapping element. Respective id's:
                  //welcome, aboutme, skills, edcation, expreince, projects,
                  //contact, errorpage. Useful for dom manipulation.
                }
                {/*<Welcome navbarHeight={this.state.navbarHeight}/>*/}
                <AboutMe navbarHeight={this.state.navbarHeight}/>
                <Skills navbarHeight={this.state.navbarHeight}/>
                <Education navbarHeight={this.state.navbarHeight}/>
                <Experience navbarHeight={this.state.navbarHeight}/>
                <Projects navbarHeight={this.state.navbarHeight}/>
                <Contact navbarHeight={this.state.navbarHeight}/>
              </Route>
              <Route path="*">
                <ErrorPage navbarHeight={this.state.navbarHeight}/>
              </Route>
            </Switch>
            <Footer />
        </Router>
        </MuiThemeProvider>
        
        
      </div>
    );
  }
}

export default App;
