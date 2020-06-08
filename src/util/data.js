//App Component

//Welcome Component

//AboutMe Component

const socialsList = [
    {
        socialName: "Gmail",
        socialLink: "mailto:jathin57@gmail.com",
        socailaIconName: "",
    },
    {
        socialName: "LinkedIn",
        socialLink: "https://www.linkedin.com/in/jathin-dhulipalla/",
        socailaIconName: ""
    },
    {
        socialName: "GitHub",
        socialLink: "https://github.com/jathinjd",
        socailaIconName: ""
    },
    {
        socialName: "Instagram",
        socialLink: "https://www.instagram.com/jathin.jd/",
        socailaIconName: ""
    },
    {
        socialName: "Facebook",
        socialLink: "https://www.facebook.com/jathin.dhulipalla/",
        socailaIconName: ""
    }
]

const interestsList = [
    {
        interestName: "Cloud & Distributed Systems",
        interestImageName: "cloud",
    },
    {
        interestName: "Full Stack Development",
        interestImageName: "fullstackdev",
    },
    {
        interestName: "UI/UX",
        interestImageName: "uiux",
    }
];

const aboutMeText = "I'm a recent graduate from Texas A&M University. I am passionate about full stack development and cloud computing. I enjoy problem solving, creating responsive, fast and reliable information systems.";

//Skills Component

const mainSkillsList = [
    {
        skillsCategoryName: "Languages",
        skillsCategoryList: [
            {skillName: "Java", skillImageName: "java"},
            {skillName: "JavaScript", skillImageName: "javascript"},
            {skillName: "SQL", skillImageName: "sql"},
            {skillName: "Python", skillImageName: "python"},
            {skillName: "R", skillImageName: "r"}
        ],
    }
]

const skillsList = [
    {
        skillsCategoryName: "Databases",
        skillsCategoryList: [
            {skillName: "MySQL", skillImageName: "mysql"},
            {skillName: "MongoDB", skillImageName: "mongodb"},
            {skillName: "MariaDB", skillImageName: "mariadb"},
            {skillName: "SQLite", skillImageName: "sqlite"},
            {skillName: "Microsoft SQL Server", skillImageName: "mssqlserver"}
        ],
    },
    {
        skillsCategoryName: "Web",
        skillsCategoryList: [
            {skillName: "React", skillImageName: "react"},
            {skillName: "Redux", skillImageName: "redux"},
            {skillName: "Express.js", skillImageName: "expressjs"},
            {skillName: "HTML", skillImageName: "html"},
            {skillName: "CSS", skillImageName: "css"},
            {skillName: "Flask", skillImageName: "flask"},
            {skillName: "Node.js", skillImageName: "nodejs"}
        ],
    },
    {
        skillsCategoryName: "Cloud & Distributed",
        skillsCategoryList: [
            {skillName: "AWS", skillImageName: "aws"},
            {skillName: "Apache Spark", skillImageName: "apachespark"},
            {skillName: "Map Reduce", skillImageName: "mapreduce"},
            {skillName: "HBase", skillImageName: "hbase"}
        ],
    }
]

const otherSkillsList = [
    {
        skillsCategoryName: "Other skills",
        skillsCategoryList: [
            {skillName: "Version Control", skillImageName: "versioncontrol"},
            {skillName: "Responsive Web Design", skillImageName: "responsiveweb"},
            {skillName: "REST", skillImageName: "rest"},
            {skillName: "Agile", skillImageName: "agile"},
            {skillName: "Scrum", skillImageName: "scrum"},
            {skillName: "UML", skillImageName: "uml"},
            {skillName: "Robotic Process Automation", skillImageName: "rpa"},
        ],
    },
    {
        skillsCategoryName: "Tools",
        skillsCategoryList: [
            {skillName: "Git", skillImageName: "git"},
            {skillName: "Bash / Command Line", skillImageName: "bash"},
            {skillName: "Tableau", skillImageName: "tableau"},
            {skillName: "Visual Studio Code", skillImageName: "vscode"},
            {skillName: "IntelliJ IDEA", skillImageName: "intellijidea"},
            {skillName: "PyCharm", skillImageName: "pycharm"},
            {skillName: "Microsoft Excel", skillImageName: "excel"},
            {skillName: "Microsoft Access", skillImageName: "access"},
            {skillName: "Microsoft PowerPoint", skillImageName: "powerpoint"},
        ],
    }
]

//Education Component

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

//Experience Component

const experienceList = [
    {   
        experienceOrg: "TriNet",
        experienceImageName: "trinet",
        experiencePosition: "Automation Intern",
        experienceLocation: "Reno, Nevada",
        experiencePeriod: "June 2019 - August 2019",
        experienceDescription: ["Programmed Automation Anywhere bot for Benefits Analysis team which saved 48 person-hours each day",
        "Optimized case triage assignment and generated workflows suitable for automation that could save $150,000 a year"]
    },
    {
        experienceOrg: "Gap Inc.",
        experienceImageName: "gapinc",
        experiencePosition: "Network Analyst",
        experienceLocation: "Hyderabad, India",
        experiencePeriod: "July 2017 - May 2018",
        experienceDescription: ["Developed a JavaScript application to generate frequently used message templates to ensure faster and effective communication with multiple stakeholders for Level 2 IT Operations team",
                                "Configured, managed, and monitored hub and spoke model routing and switching devices for N. America region",
                                "Analyzed Gap data with SQL and Tableau to spot return trends and propose solutions to reduce 11% revenue loss"]
    }
];

//Projects Component

const projectsList = [
    {
        projectTitle: "Spoons & Ladles: Web Application",
        projectImageName: "spoonsnladles",
        projectDescription: "Write a brief desc",
        projectDetails: ["Full Stack Web Application created with React.js and redux that looks up recipes based on selected ingredients",
         "Features HCI design elements with SQL database hosted on AWS and backend deployed on Spring framework"],
        projectTechnologies: ["React", "Redux", "JavaScript", "HTML", "CSS", "Spring Boot", "AWS", "HTML", "CSS"],
        projectTechnologiesImageName: ["react", "redux", "javascript", "springboot", "aws"/*, "html", "css"*/],
        projectLink: "https://spoons-and-ladles.netlify.app/",
        projectGitHubLink: "https://github.com/aish-m/spoons-and-ladles"
    },
    {
        projectTitle: "Library Analysis Application",
        projectImageName: "seattlelibrary",
        projectDescription: "Write a brief desc",
        projectDetails: ["Performed ETL on over 25 GB data and built a web application with customized APIs using Flask framework",
         "Migrated Seattle Library database on AWS from MariaDB - Galera cluster to MongoDB for faster queries"],
        projectTechnologies: ["MariaDB", "MongoDB", "Python", "Flask", "BootStrap"],
        projectTechnologiesImageName: ["mariadb", "mongodb", "python", "flask"/*, "BootStrap"*/],
        projectLink: "Link here",
        projectGitHubLink: "https://github.com/jathinjd/seattle-library-analysis"
    },
    {
        projectTitle: "CIFAR 10 - Image Classification",
        projectImageName: "cifar",
        projectDescription: "Write a brief desc",
        projectDetails: ["Performed data pre-processing with Principal Component Analysis to identify features that explain 95% variance",
         "Trained dataset with different ML models and used the validation set approach to achieve 52% accuracy with QDA"],
        projectTechnologies: ["R", "Validation Set Approach", "Unsupervised and Supervised Learning"],
        projectTechnologiesImageName: ["r"],
        projectLink: "Link here",
        projectGitHubLink: "https://github.com/jathinjd/cifar10-image-classification"
    },
    {
        projectTitle: "Network Optimization: Radom Graph Generation and Maximum Bandwidth Paths",
        projectImageName: "networkopt",
        projectDescription: "Write a brief desc",
        projectDetails: ["Developed algorithms for generating dense (20% adjacency) and sparse (average degree of 6) graphs of 5000 vertices", 
            "Generated maximum bandwidth paths using Dijkstra and Kruskal algorithms, and reduced time complexity with Heap data structure implementation"],
        projectTechnologies: ["Java", "Data Structures", "Algorithms", "Grpah Theory", "Object Oriented Programming", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
        projectTechnologiesImageName: ["java", "intellijidea"],
        projectLink: "Link here",
        projectGitHubLink: "https://github.com/jathinjd/networkopt-graphalgo"
    }
];

//Contact Component

//Footer Component

//export all

export { 
    interestsList, 
    aboutMeText, 
    mainSkillsList, 
    skillsList, 
    otherSkillsList, 
    educationList,
    experienceList,
    projectsList,
};