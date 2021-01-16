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
            link:"https://e-commerce-proj.netlify.app/"
        },
        {
            id:"dev-2",
            title:"Contact-list App",
            about:"This is a React app. I did this project to brush my skills in JavaScript, React, Css etc. In this project i have used built CRUD (Create, Read, Update, Delete) functionalities. As this project hasn't used database, so i have setup the local storage to save the user's data. The page is fully responsive to various devices.",
            images: [contact1, contact2, contact3],
            link:"https://chiranjibi-contact-app.netlify.app/"
        },
        {
            id:"dev-3",
            title:"JoinMe App",
            about: "I learned most of the skills i have in Full Stack Web Development on my own. Online courses, youtube video, documentation were my source of information. I have earned my Bachelors degree in Business Management and Masters degree in Public Administration. Both from Finland. After i kinda failed to find a job related to my degrees, i started thinking of alternative career. I was always interested in the filed of IT and i thought of giving it a try. From the beginning of 2020 while Corona Virus was engaging the whole world, so the Web Development did to me.",
            images: [joinme1, joinme2, joinme3],
            link:"https://www.linkedin.com/in/chiranjibi-chapagain-4aa57595/"
        }
        
    ],

    design: [
         {
            id:"ux-1",
            title:"Pjoject NRNA",
            about: "I learned most of the skills i have in Full Stack Web Development on my own. Online courses, youtube video, documentation were my source of information. I have earned my Bachelors degree in Business Management and Masters degree in Public Administration. Both from Finland. After i kinda failed to find a job related to my degrees, i started thinking of alternative career. I was always interested in the filed of IT and i thought of giving it a try. From the beginning of 2020 while Corona Virus was engaging the whole world, so the Web Development did to me.",
            images: [nrna1, nrna2, nrna3, nrna_mbl],
            link:"https://www.linkedin.com/in/chiranjibi-chapagain-4aa57595/"
        },
        {
            id:"ux-2",
            title:"JoinMe Application",
            about: "I learned most of the skills i have in Full Stack Web Development on my own. Online courses, youtube video, documentation were my source of information. I have earned my Bachelors degree in Business Management and Masters degree in Public Administration. Both from Finland. After i kinda failed to find a job related to my degrees, i started thinking of alternative career. I was always interested in the filed of IT and i thought of giving it a try. From the beginning of 2020 while Corona Virus was engaging the whole world, so the Web Development did to me.",
            images: [joinme1, joinme2, joinme3, joinme1],
            link:"https://www.linkedin.com/in/chiranjibi-chapagain-4aa57595/"
        },
        {
            id:"ux-3",
            title:"InnoEdu Platform",
            about: "I learned most of the skills i have in Full Stack Web Development on my own. Online courses, youtube video, documentation were my source of information. I have earned my Bachelors degree in Business Management and Masters degree in Public Administration. Both from Finland. After i kinda failed to find a job related to my degrees, i started thinking of alternative career. I was always interested in the filed of IT and i thought of giving it a try. From the beginning of 2020 while Corona Virus was engaging the whole world, so the Web Development did to me.",
            images: [innoedu1, innoedu2, innoedu3, innoedu_ipad],
            link:"https://www.linkedin.com/in/chiranjibi-chapagain-4aa57595/"
        },
        {
            id:"ux-4",
            title:"The Fire Place",
            about: "I learned most of the skills i have in Full Stack Web Development on my own. Online courses, youtube video, documentation were my source of information. I have earned my Bachelors degree in Business Management and Masters degree in Public Administration. Both from Finland. After i kinda failed to find a job related to my degrees, i started thinking of alternative career. I was always interested in the filed of IT and i thought of giving it a try. From the beginning of 2020 while Corona Virus was engaging the whole world, so the Web Development did to me.",
            images: [fireplace1, fireplace2, fireplace3, fireplace2],
            link:"https://www.linkedin.com/in/chiranjibi-chapagain-4aa57595/"
        },
    ]
}

export default projects