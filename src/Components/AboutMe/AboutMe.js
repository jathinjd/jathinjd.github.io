import React from 'react';
import './AboutMe.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const interestsList = [
            {
                interestName: "Cloud & Distributed Systems",
                interestImageName: "cloud",
            },
            {
                interestName: "Full Stack Development",
                interestImageName: "fullstackdev",
            },
            {
                interestName: "UI/UX",
                interestImageName: "uiux",
            }
        ];

        const aboutMeText = "I'm a recent graduate from Texas A&M University. I am passionate about full stack development and cloud computing. I enjoy problem solving, creating responsive, fast and reliable information systems.";

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        return(
            <div className="section" id="aboutme" style={useStyles.sectionClass}>
                <Paper className="aboutme-information" variant="outlined">
                    <p><Typography>About Me</Typography></p>
                    <img 
                        src={require("../../images/profile/displaypic.svg")}
                        alt="my profile"
                    />
                    <p><Typography>{aboutMeText}</Typography></p>
                </Paper>
                <div className="aboutme-side">
                    <Paper className="aboutme-interests" variant="outlined">
                        <p><Typography>My Interests</Typography></p>
                        <div className="aboutme-interests-content">
                            {interestsList.map((interest) => 
                                <Paper className="aboutme-interest" variant="outlined">
                                    <img 
                                        src={require("../../images/interests/" + interest.interestImageName + ".svg")}
                                        alt={interest.interestImageName}
                                    />
                                    <p>{interest.interestName}</p>
                                </Paper>
                            )}
                        </div>
                    </Paper>
                    <Paper className="aboutme-downloads" variant="outlined">
                        <Button m={1} variant="contained" className="aboutme-downlaod-button">
                            Download Resume
                        </Button>
                        <Button m={1} variant="contained" className="aboutme-downlaod-button">
                            Download Cover Letter
                        </Button>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default AboutMe;