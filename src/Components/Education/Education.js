import React from 'react';
import './Education.css';
import Grid from '@material-ui/core/Grid';
import EducationCard from '../../util/EducationCard';

class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const educationList = [
            {
                educationUniversity: "Texas A&M University",
                educationLocation: "College Station, Texas",
                educationDegrees: ["Master of Science in Management Information Systems"],
                educationCourseWork: ["Analysis of Algorithms", "Advanced Data Management (NoSQL)", "Engineering Data Analysis (ML)", 
                "IS Design and Development Project (Web Development, HCI, UX/UI)", "Advanced Systems Analysis and Design (UML, Agile)",
                "Data Warehousing"],
                educationDate: "July 2018 - May 2020",
                educationPlace: "College Station, Texas",
                educationImageTitle: "tamu",
                educationGPA: "3.67/4.0"
            },
            {
                educationUniversity: "Birla Institute of Technology & Science, Pilani",
                educationLocation: "Hyderabad, India",
                educationDegrees: ["Bachelor of Engineering in Mechanical Engineering", "Master of Science in Physics"],
                educationCourseWork: ["Computer Programming", "Probability & Statistics", "Computational Physics", "Engineering Optimization (Operations Research)"],
                educationDate: "August 2012 - July 2017",
                educationPlace: "Hyderabad, India",
                educationImageTitle: "bits",
                educationGPA: "7.53/10.0"
            }
        ]

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        return(
            <div className="section" id="education" style={useStyles.sectionClass}>
                <h1>Education Component</h1>
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