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

class App extends React.Component {

  componentDidMount(){
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById('navbar');
      if(isTop){
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
            <NavBar className="app-navbar"/>
            <Switch>
              <Route path exact="/">
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
