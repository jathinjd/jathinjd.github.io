//App Component

//Welcome Component

//AboutMe Component

const socialsList = [
    {
        socialName: "Gmail",
        socialLink: "mailto:jathin.dhulipalla@gmail.com",
        socialIconName: "",
    },
    {
        socialName: "LinkedIn",
        socialLink: "https://www.linkedin.com/in/jathin-dhulipalla/",
        socialIconName: ""
    },
    {
        socialName: "GitHub",
        socialLink: "https://github.com/jathinjd",
        socialIconName: ""
    },
    {
        socialName: "Instagram",
        socialLink: "https://www.instagram.com/jathin.jd/",
        socialIconName: ""
    },
    {
        socialName: "Facebook",
        socialLink: "https://www.facebook.com/jathin.dhulipalla/",
        socialIconName: ""
    }
]

const interestsList = [
    {
        interestName: "Cloud & Distributed Systems",
        interestImageName: "cloud",
    },
    {
        interestName: "Scalability",
        interestImageName: "scalability",
    },
    {
        interestName: "Full Stack Development",
        interestImageName: "fullstackdev",
    }
];

const aboutMeText = "I am a Software Engineer with an emphasis on platform scalability and automation. My experience includes DevOps, building data pipelines and scalable applications.";

//Skills Component

const featuredSkillsList = [
    {
        skillsCategoryName: "Featured",
        skillsCategoryList: [
            {skillName: "Java", skillImageName: "java"},
            {skillName: "Python", skillImageName: "python"},
            {skillName: "Kubernetes", skillImageName: "kubernetes"},
            {skillName: "SQL", skillImageName: "sql"},
        ],
    }
]

const skillsList = [
    {
        skillsCategoryName: "Languages",
        skillsCategoryList: [
            {skillName: "Java", skillImageName: "java"},
            {skillName: "JavaScript", skillImageName: "javascript"},
            {skillName: "SQL", skillImageName: "sql"},
            {skillName: "Python", skillImageName: "python"}
        ],
    },
    {   
        skillsCategoryName: "Databases",
        skillsCategoryList: [
            {skillName: "MySQL", skillImageName: "mysql"},
            {skillName: "MongoDB", skillImageName: "mongodb"},
            {skillName: "Microsoft SQL Server", skillImageName: "mssqlserver"}
        ],
    },
    {
        skillsCategoryName: "Web",
        skillsCategoryList: [
            {skillName: "React", skillImageName: "react"},
            {skillName: "Redux", skillImageName: "redux"},
            {skillName: "Spring Boot", skillImageName: "springboot"},
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
            {skillName: "EC2", skillImageName: "aws-ec2"},
            {skillName: "Lambda", skillImageName: "aws-lambda"},
            {skillName: "Cloud Formation", skillImageName: "aws-cloudFormation"}
        ],
    },
    {
        skillsCategoryName: "Platform",
        skillsCategoryList: [
            {skillName: "Docker", skillImageName: "docker"},
            {skillName: "Kubernetes", skillImageName: "kubernetes"},
            {skillName: "Git", skillImageName: "git"},
            {skillName: "Jenkins", skillImageName: "jenkins"}
        ],
    },
    {
        skillsCategoryName: "Other skills",
        skillsCategoryList: [
            {skillName: "Version Control", skillImageName: "versioncontrol"},
            {skillName: "Responsive Web Design", skillImageName: "responsiveweb"},
            {skillName: "REST", skillImageName: "rest"},
            {skillName: "Agile", skillImageName: "agile"},
            {skillName: "Scrum", skillImageName: "scrum"},
            {skillName: "UML", skillImageName: "uml"}
        ],
    }
]

//Education Component

const educationList = [
    {
        educationUniversity: "Texas A&M University",
        educationLocation: "College Station, Texas",
        educationDegrees: ["Master of Science in Management Information Systems"],
        educationCourseWork: ["Analysis of Algorithms", "Adv. Data Management (NoSQL)", 
        "Engineering Data Analysis (ML)", "IS Design and Development (Full Stack Web App Development, HCI)", 
        "Adv. Systems Analysis and Design (UML, Agile)", "Data Warehousing"],
        educationDate: "July 2018 - May 2020",
        educationPlace: "College Station, Texas",
        educationImageTitle: "tamu",
        educationGPA: "3.67/4.0"
    },
    {
        educationUniversity: "Birla Institute of Technology & Science, Pilani",
        educationLocation: "Hyderabad, India",
        educationDegrees: ["Bachelor of Engineering in Mechanical Engineering", "Master of Science in Physics"],
        educationCourseWork: ["Computer Programming", "Probability & Statistics", "Computational Physics", "Computer Aided Design"],
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
        experiencePosition: "Software Engineer II",
        experienceLocation: "Austin, Texas",
        experiencePeriod: "Since July 2020",
        experienceDescription: ["Championed Connect360 product launch by developing a highly customizable and scalable Python application that triages all incoming customer requests to relevant business teams", 
        "Ensured High Availability (99.4%) by packaging application and NLP dependency as multi-container Deployment", 
        "Downsizing server footprint by 60% by migrating platform to AWS EC2 and leveraging Lambda service", 
        "Initiated and collaborated on platform integrations between multiple systems reducing downtimes by over 80%",
        "Streamlined SOX tracking by building CI/CD pipeline with Jenkins and Urbancode; integrated releases with Jira"]
    },
    /*{   
        experienceOrg: "TriNet",
        experienceImageName: "trinet",
        experiencePosition: "Intern (CoE)",
        experienceLocation: "Reno, Nevada",
        experiencePeriod: "June 2019 - August 2019",
        experienceDescription: []
    },*/
    {
        experienceOrg: "Gap Inc.",
        experienceImageName: "gapinc",
        experiencePosition: "Network Analyst",
        experienceLocation: "Hyderabad, India",
        experiencePeriod: "July 2017 - May 2018",
        experienceDescription: ["Identified frequently occurring issues by building Tableau dashboards and pipeline from ServiceNow with Python",
        "Automated basic troubleshooting and monitoring activities for incidents using cloud-based network device APIs",
        "Facilitated reduction in hold times by creating a rule-based chatbot on JavaScript for helpdesk to cut times by 10%"]
    }
]

//Projects Component

const projectsList = [
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
        projectTitle: "Smart Cooking: Spoons & Ladles",
        projectImageName: "spoonsnladles",
        projectDescription: "Write a brief desc",
        projectDetails: ["Website enabled recipe finding by ingredients, posting recipes, signups, authentication, and access management",
        "Designed web application focusing on HCI principles with frontend made on React and hosted on Netlify; backend was set up with Spring Boot deployed on Heroku and MySQL database on EC2"],
        projectTechnologies: ["React", "Redux", "JavaScript", "HTML", "CSS", "Spring Boot", "AWS"],
        projectTechnologiesImageName: ["react", "redux", "javascript", "springboot", "aws"/*, "html", "css"*/],
        projectLink: "https://spoons-and-ladles.netlify.app/",
        projectGitHubLink: "https://github.com/aish-m/spoons-and-ladles"
    },
    {
        projectTitle: "Image Classification",
        projectImageName: "cifar",
        projectDescription: "Write a brief desc",
        projectDetails: ["Quantitative and qualitative analysis of non-neural network models (SVM, QDA, Boosting, Random Forest) after identifying features explaining 95% variance using PCA and obtained 52% accuracy with QDA",
        "Finally trained CNN model with data augmentation, batch normalization, and dropout for obtaining 72% accuracy"],
        projectTechnologies: ["R", "Validation Set Approach", "Unsupervised and Supervised Learning"],
        projectTechnologiesImageName: ["r"],
        projectLink: "Link here",
        projectGitHubLink: "https://github.com/jathinjd/cifar10-image-classification"
    },
    {
        projectTitle: "Algorithm Performance for Networks",
        projectImageName: "networkopt",
        projectDescription: "Write a brief desc",
        projectDetails: ["Developed application in Java to analyze the performance of graph algorithms in random dense and sparse networks",
        "Process involved generating graphs of various densities and assessing single source and MST computation times"],
        projectTechnologies: ["Java", "Data Structures", "Algorithms", "Grpah Theory", "Object Oriented Programming", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
        projectTechnologiesImageName: ["java", "intellijidea"],
        projectLink: "Link here",
        projectGitHubLink: "https://github.com/jathinjd/networkopt-graphalgo"
    }
]

const contactTemplate = {
    emailjs_userID: "user_k3uLm2i6ZCv1CFM5HGX4F",
    alertEmail: {
        emailjs_serviceID: "profileContactService",
        emailjs_templateID: "template_alert",
        alert_subject: "JathinJD Website Contact ALert!",
        alert_message: "",
        my_email: "jathin.dhulipalla@gmail.com",
        my_name: "Jathin Dhulipalla"
    },
    autoResponseEmail: {
        emailjs_serviceID: "profileContactService",
        emailjs_templateID: "template_auto_reply",
        auto_reply_subject: "Thank you for reaching out -Jathin Dhulipalla",
        auto_reply_message: "",
        my_name: "Jathin Dhulipalla",
        my_email: "jathin.dhulipalla@gmail.com"
    }
}

//Contact Component

//Footer Component

//export all

export { 
    interestsList, 
    aboutMeText, 
    featuredSkillsList, 
    skillsList,
    educationList,
    experienceList,
    projectsList,
    contactTemplate
};