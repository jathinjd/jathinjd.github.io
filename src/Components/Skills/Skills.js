import React from 'react';
import './Skills.css';
import Paper from '@material-ui/core/Paper'

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const skillsList = [
            {
                skillsCategory: "Languages",
                skillsCategoryList: [
                    {skillName: "Java", imageName: "java"},
                    {skillName: "JavaScript", imagename: "javascript"},
                    {skillName: "SQL", imagename: "sql"},
                    {skillName: "Python", imagename: "python"},
                    {skillName: "R", imagename: "r"}
                ],
            },
            {
                skillsCategory: "Databases",
                skillsCategoryList: [
                    {skillName: "MySQL", imageName: "mysql"},
                    {skillName: "MongoDB", imagename: "mongodb"},
                    {skillName: "MariaDB", imagename: "mariadb"},
                    {skillName: "SQLite", imagename: "sqlite"},
                    {skillName: "Microsoft SQL Server", imagename: "mssqlserver"}
                ],
            },
            {
                skillsCategory: "Web Technologies",
                skillsCategoryList: [
                    {skillName: "React", imageName: "react"},
                    {skillName: "Express.js", imagename: "expressjs"},
                    {skillName: "HTML", imagename: "html"},
                    {skillName: "CSS", imagename: "css"},
                    {skillName: "Flask", imagename: "flask"},
                    {skillName: "Node.js", imagename: "nodejs"}
                ],
            },
            {
                skillsCategory: "Cloud Technologies",
                skillsCategoryList: [
                    {skillName: "AWS", imageName: "aws"},
                    {skillName: "Apache Spark", imagename: "apachespark"},
                    {skillName: "Map Reduce", imagename: "mapreduce"},
                    {skillName: "HBase", imagename: "hbase"}
                ],
            },
            {
                skillsCategory: "Tools I Use",
                skillsCategoryList: [
                    {skillName: "Git", imagename: "git"},
                    {skillName: "Bash / Command Line", imagename: "bash"},
                    {skillName: "Tableau", imageName: "tableau"},
                    {skillName: "Visual Studio Code", imageName: "vscode"},
                    {skillName: "IntelliJ IDEA", imagename: "intellijidea"},
                    {skillName: "PyCharm", imagename: "pycharm"},
                    {skillName: "Microsoft Office", imageName: "msoffice"},
                ],
            },
            {
                skillsCategory: "Other skilss",
                skillsCategoryList: [
                    {skillName: "AWS", imageName: "aws"},
                    {skillName: "Apache Spark", imagename: "html"},
                    {skillName: "Map Reduce", imagename: "css"},
                    {skillName: "HBase", imagename: "hbase"}
                ],
            },
        ]

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        return(
            <div className="section" id="skills" style={useStyles.sectionClass}>
                <h1>Skills Component</h1>
                <Paper>

                </Paper>
            </div>
        )
    }
}

export default Skills;