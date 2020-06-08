import React from 'react';
import './Education.css';
import Grid from '@material-ui/core/Grid';
import EducationCard from '../../util/EducationCard';
import { educationList } from '../../util/data';
import Typography from '@material-ui/core/Typography';

class Education extends React.Component {
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
            <div className="section" id="education" style={useStyles.sectionClass}>
                <Typography variant="h4">Education</Typography>
                <Grid container className = "education-grid-container">
                    {educationList.map(education =>
                        <Grid item>
                            <EducationCard education={education} />
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    }
}

export default Education;