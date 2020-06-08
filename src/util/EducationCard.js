import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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

function EducationCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="education-card">
      <img
        className="education-card-image"
        src={require("../images/universities/" + props.education.educationImageTitle + ".svg")}
        alt={props.education.educationImageTitle}
      />
      <CardContent>
        <div className="education-card-main">
            <Typography variant="h6">{props.education.educationUniversity}</Typography>
            {props.education.educationDegrees.map((degree) => 
                <Typography><i>{degree}</i></Typography>
            )}
            <div className="education-pndts">
                <span><Typography>{props.education.educationDate}</Typography></span>
                <span><Typography>{props.education.educationPlace}</Typography></span>
            </div>
        </div>
      </CardContent>
      <CardActions disableSpacing className="education-card-bottom">
        <span>
            <p><Typography>GPA: {props.education.educationGPA}</Typography></p>
        </span>
        <span>
            <p><Typography>Coursework</Typography></p>
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
        </span>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="education-card-content">
            <p>
                <Typography>
                    Coursework:
                </Typography>
            </p>
            <ul className="education-coursework-points">
                {props.education.educationCourseWork.map((course, index) => 
                    <li key={index}><Typography>{course}</Typography></li>
                )}
            </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EducationCard;
