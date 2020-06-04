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
import ErrorPage from '../ErrorPage/ErrorPage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const getElementRange = elementId => {
    const dimObject = document.getElementById(elementId).getBoundingClientRect();
    return {
      top: dimObject.top,
      bottom: dimObject.bottom,
    }
}

const sectionIds = ["welcome", "aboutme", "skills", "education",
                    "experience", "projects", "contact"];

class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      welcomeRange: {top: 0, bottom: 0},
      aboutmeRange: {top: 0, bottom: 0},
      skillsRange: {top: 0, bottom: 0},
      educationRange: {top: 0, bottom: 0},
      experienceRange: {top: 0, bottom: 0},
      projectsRange: {top: 0, bottom: 0},
      contactRange: {top: 0, bottom: 0},
      majoritySection: "welcome",
      sectionsOnPage: []
    }

    this.loadElementDemarcations = this.loadElementDemarcations.bind(this);
    this.setSectionsOnPage = this.setSectionsOnPage.bind(this);
    this.setMajoritySection = this.setMajoritySection.bind(this);
  }

  loadElementDemarcations(){
    this.setState({
      welcome: getElementRange('welcome'),
      aboutme: getElementRange('aboutme'),
      skills: getElementRange('skills'),
      education: getElementRange('education'),
      experience: getElementRange('experience'),
      projects: getElementRange('projects'),
      contact: getElementRange('contact'),
    })
  }

  setSectionsOnPage(){
    const screenHeight = window.innerHeight;
    const sectionsOnPage = [];
    sectionsOnPage[0] = sectionIds.filter(sectionId => {
      const sectionRange = sectionId + "Range";
      console.log(this.state[sectionRange]);
      return (this.state[sectionRange].bottom > window.scrollY && 
        this.state[sectionRange].top < (window.scrollY + screenHeight));
    });
    this.state.sectionsOnPage = sectionsOnPage;
  }

  setMajoritySection(){
    let curMajoritySection;
    let maxArea = 0;
    const screenTop = window.scrollY;
    const screenBottom = screenTop + window.innerHeight;
    this.state.sectionsOnPage.forEach((sectionId) => {
      let onScreenArea;
      const sectionRange = sectionId + "Range";
      const sectionTop = this.state[sectionRange].top;
      const sectionBottom = this.state[sectionRange].bottom;
      if(sectionTop < screenTop && sectionBottom < screenBottom){
        onScreenArea = (sectionBottom - screenTop);
      } else if (sectionTop > screenTop && sectionBottom > screenBottom){
        onScreenArea = (screenBottom - sectionTop);
      } else {
        onScreenArea = (sectionBottom - sectionTop);
      }
      if(maxArea < onScreenArea){
        curMajoritySection = sectionId;
        maxArea = onScreenArea;
      }
    });
    this.setState({majoritySection: curMajoritySection});
  }

  componentDidMount(){

    this.loadElementDemarcations();

    window.addEventListener('scroll', () => {
      //For sticky navbar
      const isTop = window.scrollY > document.getElementById('navbar').getBoundingClientRect().height;
      const nav = document.getElementById('navbar');
      if(isTop){
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <div className="App">
        <Router>
            <NavBar className="app-navbar" activeSection={this.state.majoritySection}/>
            <Switch>
              <Route exact path="/">
                {
                  //ids for top element for each componenet are defined inside
                  //the render return's wrapping element. Respective id's:
                  //welcome, aboutme, skills, edcation, expreince, projects,
                  //contact, errorpage. Useful for dom manipulation.
                }
                <Welcome />
                <AboutMe />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Contact />
              </Route>
              <Route path="*" component={ErrorPage} />
            </Switch>
        </Router>
        
        
      </div>
    );
  }
}
  
export default App;
