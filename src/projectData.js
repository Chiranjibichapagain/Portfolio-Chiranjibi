import eCom1 from './assets/mocks/e-com_m2.png'
import eCom2 from './assets/mocks/e-com_d2.png'
import eCom3 from './assets/mocks/e-com_m1.png'
import contact1 from './assets/mocks/contact_t0.png'
import contact2 from './assets/mocks/contact_t1.png'
import contact3 from './assets/mocks/contact_t3.png'
import joinme1 from './assets/mocks/joinme_m2.png'
import joinme2 from './assets/mocks/joinme_m1.png'
import joinme3 from './assets/mocks/joinme_laptop.png'
import nrna1 from './assets/mocks/nrna1.png'
import nrna2 from './assets/mocks/nrna2.png'
import nrna3 from './assets/mocks/nrna3.png'
import nrna_mbl from './assets/mocks/nrna_mbl.png'
import innoedu1 from './assets/mocks/innoedu1.png'
import innoedu2 from './assets/mocks/innoedu2.png'
import innoedu3 from './assets/mocks/innoedu3.png'
import innoedu_ipad from './assets/mocks/innodeu_ipad.png'
import fireplace1 from './assets/mocks/fireplace1.png'
import fireplace2 from './assets/mocks/fireplace2.png'
import fireplace3 from './assets/mocks/fireplace3.png'

const projects = {
    dev: [
        {
            id:"dev-1",
            title:"E-commerce Website",
            about: "This is a MERN (MongoDB, Express, React, Node) stack project. This is a demo project i did to sharpen my skill in Full-Stack technologies. I did this project using Typescript. Technologies and libraries such as Redux, Google Authentication, Material UI, Context API are also used in this project. Features of this projects includes CRUD operations for user and product, google login, password reset, Admin roles (bann user, give user roles), add product to cart and checkout. The server side of the application is deployed in the Heroku and client side in the Netlify.",
            images: [eCom1, eCom2, eCom3],
            link: "https://e-commerce-proj.netlify.app/",
            github:"https://github.com/Chiranjibichapagain/MERN-stack-e-commerce-APP"
        },
        {
            id:"dev-2",
            title:"Contact-list App",
            about:"This is a React app. I did this project to brush my skills in JavaScript, React, Css etc. In this project i have used built CRUD (Create, Read, Update, Delete) functionalities. As this project hasn't used database, so i have setup the local storage to save the user's data. The page is fully responsive to various devices.",
            images: [contact1, contact2, contact3],
            link: "https://chiranjibi-contact-app.netlify.app/",
            github: "https://github.com/Chiranjibichapagain/Contact-list-app"
        },
        {
            id:"dev-3",
            title:"JoinMe App",
            about: "This is a PERN [Postgres, Express, React, Node] Stack Web application built using TypeScript. This is a group project and a group of 5 students includig me built this project. In this Project we have tried to write follow the process that is industry standard. We manage the project with github project management tool and everyone of us worked as scrum master for atleast 2-weeks long sprint. In this application, a user can login with google and create/ join event created by others. User can also filter events based on the given distance. For more info please visit the app. THIS PROJECT IS UNDER CONSTRUCTION!  ",
            images: [joinme1, joinme2, joinme3],
            link: "https://joinme-integrify.herokuapp.com/get-started",
            github:"https://joinme-integrify.herokuapp.com/"
        }
        
    ],

    design: [
         {
            id:"ux-1",
            title:"Pjoject NRNA",
            about: "This is a ongoing huge project. NRNA is a world-wide non-governmental organization that connects Nepalese people living in around 80 countries. This project has 11 components including web portal, membership registration, and online voting system. Designing system for this project was challanging especially becuase of its diverse users and complex membership verification requirement. Moreover user with diverse backround and addressing their country requirement was very challanging. I have designed Both UX and UI of the system. Various round of stakeholders meetings and user research were carried out before the actual diesgn",
            images: [nrna1, nrna2, nrna3, nrna_mbl],
            link:"https://www.figma.com/proto/W4nexXKZqEdxNggLhG2PoK/SMART_NRNA_PROJECT?node-id=11%3A14&viewport=553%2C107%2C0.08662553876638412&scaling=min-zoom"
        },
        {
            id:"ux-2",
            title:"JoinMe Application",
            about: "This is a Full Stack Web application. This is a group project and a group of 5 students includig me built this project. UX and UI of this project is mostly done by me where i received some input form other group members as well. As this is an imaginary project, the design is pretty basic and i have tried to make this app clean and simple. As this application foucses on finding people aroud to do sports activities together, youthful ans warm color combination; orange/OrangeRed is used. For hassel-free registation users can register with google account, and they can filter events in the given radius from the given address.   ",
            images: [joinme1, joinme2, joinme3, joinme1],
            link:"https://www.figma.com/proto/MAtneSrLvEXJMx27c15dn8/joinMe?node-id=26%3A147&viewport=716%2C167%2C0.06857454776763916&scaling=min-zoom"
        },
        {
            id:"ux-3",
            title:"InnoEdu Platform",
            about: "INNOEDU (Innovative Education Council OY) developes gamified learning materials for primary school students with the vision to help develop the logical thinking skills for primary school students and teach them basics of programming logic, e-learning solution. I started working as an intern in the INNOEDU from mid-December 2019. As this is a startup, there was no senior UX/UI designer who could support my learning. Therefore, i have been designing the UX/UI in the INNOEDU depending on my own knowledge and research. I have been concerntrating mainly on redesigning the company’s website, User registration, and user dashbaord.",
            images: [innoedu1, innoedu2, innoedu3, innoedu_ipad],
            link:"https://www.innoedu.org/Home/Index"
        },
        {
            id:"ux-4",
            title:"The Fire Place",
            about: "This is my personal project base on design-thinking solution group work i worked in during my Master's degree. There are two parts in this project. The first part is service design and the second one is the UX/UI design. All of us 8 people were involved in the service design part. Our task was just to reccomend a solution for the given challange. As we came up with a solution that is a digital platform, i decided to work on the UX/UI after the project alone. Therefore, along with significant contribution in the service design process, i have done UX/UI design alone. ",
            images: [fireplace1, fireplace2, fireplace3, fireplace2],
            link:"https://www.figma.com/proto/rAgRNu6KxlIHlRLRYAvXM8/KTH_proj?node-id=8%3A56&viewport=-168%2C1497%2C0.017567496746778488&scaling=scale-down"
        },
    ]
}

export default projects