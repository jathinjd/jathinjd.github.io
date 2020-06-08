import React from 'react';
import './AboutMe.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { interestsList, aboutMeText} from '../../util/data';


class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        
        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        return(
            <div className="section" id="aboutme" style={useStyles.sectionClass}>
                <Paper className="aboutme-information" variant="outlined">
                    <Typography variant="h4">About Me</Typography>
                    <img 
                        src={require("../../images/profile/displaypic.jpg")}
                        alt="my profile"
                    />
                    <p><Typography>{aboutMeText}</Typography></p>
                </Paper>
                <div className="aboutme-side">
                    <Paper className="aboutme-interests" variant="outlined">
                        <Typography className="abouteme-interests-title" variant="h4">Interests</Typography>
                        <div className="aboutme-interests-content">
                            {interestsList.map((interest) => 
                                <Paper className="aboutme-interest" variant="outlined">
                                    <img 
                                        src={require("../../images/interests/" + interest.interestImageName + ".svg")}
                                        alt={interest.interestImageName}
                                    />
                                    <Typography>{interest.interestName}</Typography>
                                </Paper>
                            )}
                        </div>
                    </Paper>
                    <Paper className="aboutme-downloads" variant="outlined">
                        <div className="aboutme-download-item">
                            <a target="_blank" rel="noopener noreferrer" href={require("../../util/files/resume.pdf")}>
                                <img 
                                    src={require("../../images/misc/pdf.svg")}
                                    alt="Jathin-Dhulipalla-Resume-pdf"
                                />
                                <Typography variant="h6">
                                    Download Resume
                                </Typography>
                            </a>
                        </div>
                        <div className="aboutme-download-item">
                            <a target="_blank" rel="noopener noreferrer" href={require("../../util/files/coverletter.pdf")}>
                                <img 
                                    src={require("../../images/misc/pdf.svg")}
                                    alt="Jathin-Dhulipalla-Resume-pdf"
                                />
                                <Typography variant="h6">
                                    Download Cover Letter
                                </Typography>
                            </a>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default AboutMe;