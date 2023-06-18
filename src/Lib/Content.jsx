/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import  travel from "./propic/travel.png"
import  boat from "./propic/boat.jpg"
import  udmey from "./propic/udmey.jpg"
import portfolio from "./propic/portfolio.png"
import kfc from "./propic/kfc.png"
import sugar_cosmetics from "./propic/sugar_cosmetics.png"
export default {
    managerialSkills: ["Leadership", "Strategising", "Planning", "Team Motivation",  "Research", "Finance Management"],
    technicalSkills: [{name:"React",logo:`<i className="fa-brands fa-reacteurope"></i>`},{name:"NextJs",logo:`<i className="fa-brands fa-js-square"></i>`}, {name:"JavaScript",logo:`<i className="fa-brands fa-js-square"></i>`}, {name:"Material UI",logo:`<i className="fa-brands fa-uikit"></i>`}, {name:"Bootstrap",icon:`<i className="fa-brands fa-bootstrap"></i>`}, {name:"CSS",icon:`<i className="fa-brands fa-css3-alt"></i>`},{name:"Telwind CSS",icon:`<i className="fa-brands fa-css3-alt"></i>`} ,{name:"Express",icon:`<i className="fa-solid fa-gauge-simple"></i>`}, {name:"Git & GitHub",icon:`<i className="fa-brands fa-git-alt"></i>`}, {name:"MongoDB",icon:`<i className="fa-solid fa-database"></i>`}, {name:"Redis",icon:`<i className="fa-solid fa-server"></i>`}, {name:"TypeScript",icon:`<i className="fa-brands fa-jsfiddle"></i>`}, {name:"Jest",icon:`<i className="fa-solid fa-flask-vial"></i>`}, {name:"Node.js",icon:`<i className="fa-brands fa-node-js"></i>`},{name:"Websocket",icon:`<i className="fa-solid fa-cubes-stacked"></i>`},{name:"Authorization(JWT,OAuth)",icon:`<i className="fa-brands fa-reacteurope"></i>`},{name:"Data Structures",icon:`<i className="fa-brands fa-reacteurope"></i>`}],
    marketingSkills: ["VS Code", "Postman", "Git", "JIRA", "CodeSandbox"],
    education: {
        bc:{
            name: "Masai School",
            type: "Bootcamp",
            course: "Full Stack Web Development (MERN)",
            duration: "2021-2022"
            
        },
        ug: {
            name: "A.N College, Patna",
            type: "University",
            course: "B.Sc in Physics",
            duration: "2018-2021"
            
        },
        highSchool: {
            name: "R.K.V.M senior Secondary School, Patna",
            type: "High School",
            course: "PCM ",
            duration: "2016-2018"
        },
        juniorSchool: {
            name: "Keshav Saraswati Vidya Mandir, Patna",
            type: "Primary School",
            course: "General",
            duration: "2008 -2015"
        }
    },
    work: [
        {
            company: "KFC Clone",
            link: "https://github.com/hlv-kakashi/KFC-clone-full-stack",
            role: "ReactJS, Redux , Styled-components, NodeJs , Express , MongoDB ",
            description:["Created a full-stack website known as KFC. From this website you can order different fast food like burger chicken-rolls, etc. A team project completed within 5 days. "],
            duration: "June 2022- Jun 2022", 
            feedback:"",
            url : "https://clone-kfc.netlify.app/",
            propic:kfc
        },
        {
            company: "Sugar Cosmetics Clone",
            link: "https://github.com/DhimanAnkush/tart-clover-1298",
            role: "ReactJS, Redux , Tailwind CSS, NodeJs , Express , MongoDB ",
            description:["Created a full-stack website known as Sugar Cosmetics. From this website you can order different make up and skincare products. A team project completed within 5 days. "],
            duration: "July 2022- July 2022", 
            feedback:"",
            url : "https://sugar-cosmetics.vercel.app/",
            propic:sugar_cosmetics  
        },
        {
            company: "Travelocity Clone",
            link: "https://github.com/AmanJaiswal0612/React_Travelocity_Clone",
            role: "ReactJS, Redux ,MaterialUI, LocalStorage",
            description: ["Created a very popular website know as travelocity.The Look and all the functionality of our website is very similar to the original website.From this website, users can book a hotel room, flights, cars, etc. across the world. A team project completed within 5 days.  "],
            duration: "May 2022- May 2022",
            feedback: "",
            url:"https://celadon-dodol-b03f1e.netlify.app/",
            propic:travel
        },
        {
            company: "React Portfolio",
            link: "https://github.com/AmanJaiswal0612/react-portfolio-aman",
            role: "ReactJS , MaterialUI",
            description:["A full detailed portfolio of my self where you can see all the details of my skills,projects,contact at one place."],
            duration: "May 2022- June 2022",
            feedback:"",
            url : "https://amanjaiswal-portfolio.netlify.app/",
            propic:portfolio
        },
        {
            company: "Udemy Clone",
            link: "https://github.com/rushig777/Udemy-clone",
            role: "HTML5, CSS3, JS (DOM),ES6",
            description: ["Clone of a very popular website udemy.com from where you can learn new skills by enrolling into your desired online course . Our Cloned website of Udemy contains almost every functionality that the original one have. This is a team project which we completed with in 5days "],
            duration: "Mar 2022 - Mar 2022",
            feedback: "",
            url:"https://cloneof-udemy.netlify.app/",
            propic:udmey
        },
        {
            company: "Boat Clone",
            link: "https://github.com/AmanJaiswal0612/Boat-clone-masai",
            role: "HTML,CSS,JS",
            description: ["Clone of India's leading Wide range of electronic gadgets brand. A team project completed within 5 days with simple,well defined navigation."],
            duration: "Feb 2022 - Feb 2022",
            feedback: "",
            url:"https://romantic-ramanujan-b93d21.netlify.app/",
            propic:boat
        },
    
    ],
    accomplishments: [
        {
            award:'Hard Working Employee',
            description:'Certificate of Apperciation for hardworkand contribution at DPD Technolgies/Queuebuster',
            by: "DPD Technolgies/Queuebuster",
            when: "MARCH 2023",
        },
        {
            award:'Runner Up  Construct Week Project',
            description:'SECOND Price at Masai School  Construct Week Project',
            by: "Masai School",
            when: "JUNE 2022",
        }
        ,{
        award: "Deveotee Service Samman",
        description: "Voluntarily participated and serves more than 1000 devotees in Isckon Ratha Yatra 2019,Kolkata",
        by: "Iskcon,kolkata",
        when: "JULY 2019",
    }, {
        award: "Inter School badminton champion",
        description: "Won the First Place in School level badminton tournament",
        by: "KSVM",
        when: "DEC 2016",
    }, {
        award: "Best organiser",
        description: "Successfully organise independent day program in HIG Colony patna ",
        by: "HIG Patna",
        when: "AUG 2019"
    }],
};