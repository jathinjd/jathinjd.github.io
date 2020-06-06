import React from 'react';
import './Experience.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Experience extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const experienceList = [
            {   
                experienceOrg: "TriNet",
                experiencePosition: "Automation Intern",
                experienceLocation: "Reno, Nevada",
                experiencePeriod: "June 2019 - August 2019",
                experienceDescription: ["Programmed Automation Anywhere bot for Benefits Analysis team which saved 48 person-hours each day",
                "Optimized case triage assignment and generated workflows suitable for automation that could save $150,000 a year"]
            },
            {
                experienceOrg: "Gap Inc.",
                experiencePosition: "Network Analyst",
                experienceLocation: "Hyderabad, India",
                experiencePeriod: "July 2017 - May 2018",
                experienceDescription: ["Developed a JavaScript application to generate frequently used message templates to ensure faster and effective communication with multiple stakeholders for Level 2 IT Operations team",
                                        "Configured, managed, and monitored hub and spoke model routing and switching devices for N. America region",
                                        "Analyzed Gap data with SQL and Tableau to spot return trends and propose solutions to reduce 11% revenue loss"]
            }
        ];

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        return(
            <div className="section" id="experience" style={useStyles.sectionClass}>
                <h1>Experience Component</h1>
                <div className="experience-cards">
                    {experienceList.map(experience =>
                        <Paper className="experience-card" elevation={3}>
                            <div className="experience-card-logo">
                                <img 
                                    src={require("../../images/organizations/" + experience.experienceOrg + ".svg")}
                                />
                            </div>
                            <div className="experience-card-information">
                                <div className="experience-head">
                                    <div className="experience-titles">
                                        <h3><Typography>{experience.experienceOrg}</Typography></h3>
                                        <p className="experience-position"><Typography>{experience.experiencePosition}</Typography></p>
                                    </div>
                                    <div className="experience-pndts">
                                        <p className="experience-location"><Typography>{experience.experienceLocation}</Typography></p>
                                        <p className="experience-period"><Typography>{experience.experiencePeriod}</Typography></p>
                                    </div>
                                </div>
                                <div className="experience-details">
                                    <ul>
                                        {experience.experienceDescription.map((descPoint, index) => 
                                            <li key={index}><Typography>{descPoint}</Typography></li>                                        
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </Paper>
                    )}
                </div>
            </div>
        )
    }
}

export default Experience;