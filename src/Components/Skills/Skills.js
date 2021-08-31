import React from 'react';
import './Skills.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { featuredSkillsList, skillsList } from '../../util/data';

class Skills extends React.Component {
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
            <div className="section" id="skills" style={useStyles.sectionClass}>
                <div className="skills-container" >
                    <Typography variant="h4">Skills</Typography>
                    <div className="skills-content">
                        {featuredSkillsList.map(skillsCategory => 
                            <Paper className="skills-section">
                                <Typography variant="h6" className="skills-category-name">{skillsCategory.skillsCategoryName}</Typography>
                                <div className="skills-items">
                                    {skillsCategory.skillsCategoryList.map(skillsItem =>
                                        <div className="skills-item">
                                            <img 
                                                src={require("../../images/technologies/" + skillsItem.skillImageName + ".svg")}
                                                alt={skillsItem.skillName}
                                            />
                                            <Typography>{skillsItem.skillName}</Typography>
                                        </div>
                                    )}
                                </div>
                            </Paper>
                        )}
                        {skillsList.map(skillsCategory => 
                            <ExpansionPanel className="skills-section">
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="h6" className="skills-category-name">{skillsCategory.skillsCategoryName}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className="skills-items">
                                        {skillsCategory.skillsCategoryList.map(skillsItem =>
                                            <div className="skills-item">
                                                <img 
                                                    src={require("../../images/technologies/" + skillsItem.skillImageName + ".svg")}
                                                    alt={skillsItem.skillName}
                                                />
                                                <Typography>{skillsItem.skillName}</Typography>
                                            </div>
                                        )}
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;