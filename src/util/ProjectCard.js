import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function ProjectCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="project-card">
      <CardHeader className="card-header"
        title={props.project.projectTitle}
      />
      <a target="_blank" rel="noopener noreferrer" href={props.project.projectLink}>
        <CardMedia
          className={classes.media}
          image={require("../images/projects/" + props.project.projectImageName + ".jpg")}
          title={props.project.projectTitle}
        />
      </a>
      <CardContent>
        <div className="card-technology-icons">
            {props.project.projectTechnologiesImageName.map((technology) =>
                <img 
                    src={require("../images/technologies/" + technology + ".svg")}
                    alt={technology}
                />
            )}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <a target="_blank" rel="noopener noreferrer" href={props.project.projectGitHubLink}>
          <IconButton>
            <GitHubIcon style={{fill: "black"}}/>
          </IconButton>
        </a>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="card-content">
            <p>
                <Typography>
                    {"Technologies: " + props.project.projectTechnologies.join(', ')}
                </Typography>
            </p>
            <ul className="card-description-points">
                {props.project.projectDetails.map((point, index) => 
                    <li key={index}><Typography>{point}</Typography></li>
                )}
            </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProjectCard;
