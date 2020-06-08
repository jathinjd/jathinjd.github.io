import React from 'react';
import './Experience.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { experienceList } from '../../util/data';

class Experience extends React.Component {
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
            <div className="section" id="experience" style={useStyles.sectionClass}>
                <Typography variant="h4">Professional Experience</Typography>
                <div className="experience-cards">
                    {experienceList.map(experience =>
                        <Paper className="experience-card" elevation={3}>
                            <div className="experience-card-logo">
                                <img 
                                    src={require("../../images/organizations/" + experience.experienceImageName + ".svg")}
                                    alt={experience.experienceOrg}
                                />
                            </div>
                            <div className="experience-card-information">
                                <div className="experience-head">
                                    <div className="experience-titles">
                                        <Typography variant="h6">{experience.experienceOrg}</Typography>
                                        <p className="experience-position"><Typography>{experience.experiencePosition}</Typography></p>
                                    </div>
                                    <div className="experience-pndts">
                                        <Typography><i>{experience.experienceLocation}</i></Typography>
                                        <Typography><i>{experience.experiencePeriod}</i></Typography>
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