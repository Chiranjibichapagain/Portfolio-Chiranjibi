import { faDesktop, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faUikit } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import redux from './assets/redux.svg'
import materialUi from './assets/material-ui.svg'
import typeScript from './assets/typescript-icon.svg'
import expressJs from './assets/express.svg'
import restApi from './assets/restApi.svg'
import mongoDB from './assets/mongodb.svg'
import postgreSql from './assets/postgresql.svg'
import cypress from './assets/cypress.svg'
import jest from './assets/jest.svg'
import photoshop from './assets/photoshop.svg'
import illustrator from './assets/illustrator.svg'
import premiere from './assets/premiere.svg'
import xd from './assets/adobe-xd.svg'
import english from './assets/uk.svg'
import nepali from './assets/nepal.svg'
import hindi from './assets/india.svg'
import finnish from './assets/finland.svg'

const cv = {
    education: [
        {
            degree: "Vocational Degree",
            title: "Full stack web development",
            institute: "Business College Helsinki",
            year: "2020-current",
            courses:"UI Design, HTML5, CSS3, JavaScript, React, Redux, Node.js, Express, API, Data structure, AWS, Testing"
        },
        {
            degree: "Master's Degree",
            title: "Innovative Governance and Public Management",
            institute: "Tampere Univeristy",
            year: "2017-2019",
            courses:"Design Thinking, innovations and ecosystems, Organizational change and change management, Governance, Leadership in public organizations, Industrial Development"
        },

        {
            degree: "Bachelor's Degree",
            title: "International Business Management",
            institute: "Centria University of Applied Science",
            year: "2012-2014",
            courses:"Marketing, Financial and Management accounting, Team leadership, Economics, CRM, ERP, SAP, Business communication, International Trade, Industrial Economics."
        },
    ],

    workExperiences: [
        {
            title: "Full-Stack Developer",
            company: "Integrify",
            location: "Helsinki, Finland",
            date: "August 2020-Present",
            tasks: [
                "Taking numerous responsibilities in front-end development with JavaScript and TypeScript and applied frameworks and other tools such as React.js and Redux among many others.",
                "Contributing to the back-end development of various projects with Node.js and Express.js.",
                "Building and managing databases with MongoDB and PostgreSQL.",
                "Conducting software tests with Jest.",
                "Collaborating with other developers of different seniority via GitHub Actions."
            ]
        },

        {
            title: "UX/UI Designer",
            company: "Innovative Education Council Oy",
            location: "Helsinki, Finland",
            date: "December 2019 - June 2020",
            tasks: [
                "Conducted research on the topic of user exprience.",
                "Completed customer journey mapping for various projects.",
                "Developed wire frames and prototypes by using Figma.",
                "Collaborated with other developers when developing the aforementioned prototypes."
            ]
        },

        {
            title: "Project Management Trainee",
            company: "Arbonaut Oy",
            location: "Helsinki, Finland",
            date: "May 2018-August 2018",
            tasks: [
                "Wrote policy briefs.",
                "Made field visits to the project area in Nepal.",
                "Prepared a project evaluation report.",
                "Drafted a project proposal."
            ]
        },

        {
            title: "Media Coordinator and Event Manager",
            company: "NRNA Finland Ry",
            location: "Helsinki, Finland",
            date: "June 2017-January 2020",
            tasks: [
                "Handled organizational communications and social media channels.",
                "Created the social media content.",
                "Organized and managed events."
            ]
        },

          {
            title: "News and Program Presenter",
            company: "Makalu Television",
            location: "Birathnagar, Nepal",
            date: "April 2010-May2012",
            tasks: [
                "Presented live news.",
                "Produced and also presented an original program.",
                "Contributed to editing the news stories.",
                "Coordinated correspondents."
            ]
        },

    ],

    skills: {
        tech: [
            {
                stack: "Frontend",
                techs: [
                    {
                        tech: "Accessibility",
                        icon:faUniversalAccess
                    },
                    {
                        tech: "Responsiveness",
                        icon:faPhoneAlt
                    },
                    {
                        tech: "CSS3",
                        icon:faCss3Alt
                    },
                    {
                        tech: "HTML5",
                        icon:faHtml5
                    },
                    {
                        tech: "JavaScript",
                        icon:faJs
                    },
                    {
                        tech: "materialUi",
                        icon:materialUi
                    },
                    {
                        tech: "React.js",
                        icon:faReact
                    },
                    {
                        tech: "Redux",
                        icon:redux
                    },
                    {
                        tech: "SCSS",
                        icon:faSass
                    },
                    {
                        tech: "TypeScript",
                        icon:typeScript
                    },
                ]
            },
            
            {
                stack: "Backend",
                techs: [
                    {
                        tech: "Express.js",
                        icon:expressJs
                    },
                    {
                        tech: "Node.js",
                        icon:faNode
                    },

                    {
                        tech: "Rest API",
                        icon:restApi
                    }
                ]
            },

            {
                stack: "Database",
                techs: [
                    {
                        tech: "MongoDB",
                        icon:mongoDB
                    },
                    {
                        tech: "PostgreSQL",
                        icon:postgreSql
                    },
                ]
            },

            {
                stack: "Testing",
                techs: [
                    {
                        tech: "Cypress",
                        icon:cypress
                    },
                    {
                        tech: "Jest",
                        icon:jest
                    }
                ]
            },

            {
                stack: "DevOps/Cloud",
                techs: [
                    {
                        tech: "Docker",
                        icon:faDocker
                    },
                    {
                        tech: "CI/CD/Github Actions",
                        icon:faGithub
                    },
                ]
            },

            {
                stack: "Design, Graphics",
                techs: [
                    {
                        tech: "Adobe Photoshop",
                        icon:photoshop
                    },
                    {
                        tech: "Adobe Premiere",
                        icon:premiere
                    },
                    {
                        tech: "Adobe Illustrator",
                        icon:illustrator
                    },
                    {
                        tech: "Adobe XD",
                        icon:xd
                    },
                    {
                        tech: "Figma",
                        icon:faFigma
                    },
                ]
            },
           
        ],

        language: [
            {
                language: english,
                profeciency:"Fluent"
            },
            {
                language: finnish,
                profeciency:"Intermediate"
            },
            {
                language: nepali,
                profeciency:"Native"
            },
            {
                language: hindi,
                profeciency:"Fluent"
            }

        ]
    },
     

    trainings: [
        {
            title: "Full-stack Open",
            institute: "University of Helsinki, Open University",
            date: "2020",
            subjects:"React, Redux, Express.js, Node.js, Jest, Cypress, MondoDB, TypeScript"
        },

        {
            title: "EU-Aid Volunteers Initiative",
            institute: "Austrian study center for peace and conflict resolutions, Austria",
            date: "2019",
            subjects:"EU institutions, Humanitarian assistance, International Humanitarian law, physical and psychological first aid, SAFE, Project Management, Security and First Aid simulation exercise"
        },
    ]
}

export default cv