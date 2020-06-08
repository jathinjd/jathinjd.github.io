import React from 'react';
import './Projects.css';
import ProjectCard from '../../util/ProjectCard';
import Grid from '@material-ui/core/Grid';
import { projectsList } from '../../util/data';
import Typography from '@material-ui/core/Typography';

class Projects extends React.Component {
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
            <div className="section" id="projects" style={useStyles.sectionClass}>
                <Typography variant="h4">Projects</Typography>
                <div className = "projects-content">
                    {projectsList.map(project =>
                        <Grid item>
                            <ProjectCard project={project} />
                        </Grid>
                    )}
                </div>
            </div>
        )
    }
}

export default Projects;