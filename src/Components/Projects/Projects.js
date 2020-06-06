import React from 'react';
import './Projects.css';
import DetailCard from '../../util/DetailCard';
import Grid from '@material-ui/core/Grid';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const projectsList = [
            {
                projectTitle: "Project1 title is long enough to go to next line",
                projectImageLink: "imageurlhere",
                projectDescription: "Write a brief desc",
                projectDetails: ["point1 should be long enough to at last go past one line so I can see how it is", "point", "point"],
                projectTechnologies: ["React", "Redux", "JavaScript", "Heroku"],
                projectLink: "Link here",
            },
            {
                projectTitle: "Project1 title is long enough to go to next line",
                projectImageLink: "imageurlhere",
                projectDescription: "Write a brief desc",
                projectDetails: ["point1 should be long enough to at last go past one line so I can see how it is", "point", "point"],
                projectTechnologies: ["React", "Redux", "JavaScript", "Heroku", "React","React", "React","React","React", "React", "React"],
                projectLink: "Link here",
            },
            {
                projectTitle: "Project1 title is long enough to go to next line",
                projectImageLink: "imageurlhere",
                projectDescription: "Write a brief desc",
                projectDetails: ["point1 should be long enough to at last go past one line so I can see how it is", "point", "point"],
                projectTechnologies: ["React", "Redux", "JavaScript", "Heroku"],
                projectLink: "Link here",
            },
            {
                projectTitle: "Project1 te",
                projectImageLink: "imageurlhere",
                projectDescription: "Write a brief desc",
                projectDetails: ["point1 should be long enough to at last go past one line so I can see how it is", "point", "point"],
                projectTechnologies: ["React", "Redux", "JavaScript", "Heroku"],
                projectLink: "Link here",
            },
            {
                projectTitle: "Project1 title is long enough to go to next line",
                projectImageLink: "imageurlhere",
                projectDescription: "Write a brief desc",
                projectDetails: ["point1 should be long enough to at last go past one line so I can see how it is", "point", "point"],
                projectTechnologies: ["React", "Redux", "JavaScript", "Heroku"],
                projectLink: "Link here",
            },
            {
                projectTitle: "Project1 title is long enough to go to next line",
                projectImageLink: "imageurlhere",
                projectDescription: "Write a brief desc",
                projectDetails: ["point1 should be long enough to at last go past one line so I can see how it is", "point", "point"],
                projectTechnologies: ["React", "Redux", "JavaScript", "Heroku"],
                projectLink: "Link here",
            },
            {
                projectTitle: "Project1 title is long enough to go to next line",
                projectImageLink: "imageurlhere",
                projectDescription: "Write a brief desc",
                projectDetails: ["point1 should be long enough to at last go past one line so I can see how it is", "point", "point"],
                projectTechnologies: ["React", "Redux", "JavaScript", "Heroku"],
                projectLink: "Link here",
            }
        ];

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        return(
            <div className="section" id="projects" style={useStyles.sectionClass}>
                <h1>Projects</h1>
                <Grid container className = "grid-container">
                    {projectsList.map(project =>
                        <Grid item>
                            <DetailCard project={project} />
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    }
}

export default Projects;