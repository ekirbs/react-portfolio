// import { useState, useEffect } from 'react';
import {
  dailySchedulePlanner,
  theBigQuiz,
  expressNoteTaker,
  natParkTravelGuide,
  randomPasswordGenerator,
  weatherForecast,
  bostonStreetCuisine,
  taskSandwich,
  bostonStreetCuisineMobile,
  taskSandwichMobile,
} from "./images";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { DiBootstrap, DiCss3, DiJavascript1, DiMongodb } from "react-icons/di";
import {
  SiSequelize,
  SiGraphql,
  SiApollographql,
  SiHandlebarsdotjs,
  SiExpress,
  SiJquery,
} from "react-icons/si";

// const isMobile = window.matchMedia("(max-width: 800px)").matches;

// const Projects = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 800);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const projectList = [

const Showcase = [
  {
    title: "Task Sandwich",
    pic: taskSandwich,
    // "pic": window.innerWidth <= 800 ? taskSandwichMobile : taskSandwich,
    deploy: "https://task-sandwich.herokuapp.com",
    github: "https://github.com/slerner/task-sandwich",
    description: "A task-management system with built in rewards system.",
    technologies: [
      <h6 className="highlight react-highlight">
        <FaReact className="tech-icon" />
        <span className="tech-text">React.js</span>
      </h6>,
      <h6 className="highlight js-highlight">
        <DiJavascript1 className="tech-icon" />
        <span className="tech-text">JavaScript</span>
      </h6>,
      <h6 className="highlight graph-highlight">
        <SiGraphql className="tech-icon" />
        <span className="tech-text">GraphQL</span>
      </h6>,
      <h6 className="highlight mongo-highlight">
        <DiMongodb className="tech-icon" />
        <span className="tech-text">MongoDB</span>
      </h6>,
      <h6 className="highlight html-highlight">
        <FaHtml5 className="tech-icon" />
        <span className="tech-text">HTML5</span>
      </h6>,
      <h6 className="highlight apollo-highlight">
        <SiApollographql className="tech-icon" />
        <span className="tech-text">Apollo</span>
      </h6>,
      <h6 className="highlight css-highlight">
        <DiCss3 className="tech-icon" />
        <span className="tech-text">CSS3</span>
      </h6>,
      <h6 className="highlight node-highlight">
        <FaNodeJs className="tech-icon" />
        <span className="tech-text">Node.js</span>
      </h6>,
      <h6 className="highlight ex-highlight">
        <SiExpress className="tech-icon" />
        <span className="tech-text">Express.js</span>
      </h6>,
    ],
  },
  {
    title: "Boston Street Cuisine",
    pic: bostonStreetCuisine,
    // "pic": window.innerWidth <= 800 ? bostonStreetCuisineMobile : bostonStreetCuisine,
    deploy: "https://boston-street-cuisine-app.herokuapp.com/",
    github: "https://github.com/ekirbs/street-food-blog",
    description:
      "Locate street food vendors in Boston. Find out information about them and discuss with other users.",
    technologies: [
      <h6 className="highlight hbrs-highlight">
        <SiHandlebarsdotjs className="tech-icon" />
        <span className="tech-text">Handlebars</span>
      </h6>,
      <h6 className="highlight node-highlight">
        <FaNodeJs className="tech-icon" />
        <span className="tech-text">Node.js</span>
      </h6>,
      <h6 className="highlight jq-highlight">
        <SiJquery className="tech-icon" />
        <span className="tech-text">JQuery</span>
      </h6>,
      <h6 className="highlight ex-highlight">
        <SiExpress className="tech-icon" />
        <span className="tech-text">Express.js</span>
      </h6>,
      <h6 className="highlight html-highlight">
        <FaHtml5 className="tech-icon" />
        <span className="tech-text">HTML5</span>
      </h6>,
      <h6 className="highlight css-highlight">
        <DiCss3 className="tech-icon" />
        <span className="tech-text">CSS3</span>
      </h6>,
      <h6 className="highlight js-highlight">
        <DiJavascript1 className="tech-icon" />
        <span className="tech-text">JavaScript</span>
      </h6>,
    ],
  },
  {
    title: "Daily Schedule Planner",
    pic: dailySchedulePlanner,
    deploy: "https://ekirbs.github.io/daily-schedule-planner/",
    github: "https://github.com/ekirbs/daily-schedule-planner",
    description:
      "A Daily Schedule Planner to allows the saving, organization, and deletion of daily activities.",
    technologies: [
      <h6 className="highlight jq-highlight">
        <SiJquery className="tech-icon" />
        <span className="tech-text">JQuery</span>
      </h6>,
      <h6 className="highlight html-highlight">
        <FaHtml5 className="tech-icon" />
        <span className="tech-text">HTML5</span>
      </h6>,
      <h6 className="highlight css-highlight">
        <DiCss3 className="tech-icon" />
        <span className="tech-text">CSS3</span>
      </h6>,
      <h6 className="highlight js-highlight">
        <DiJavascript1 className="tech-icon" />
        <span className="tech-text">JavaScript</span>
      </h6>,
      <h6 className="highlight bootstrap-highlight">
        <DiBootstrap className="tech-icon" />
        <span className="tech-text">Bootstrap</span>
      </h6>,
    ],
  },
  {
    title: "The BIG Quiz",
    pic: theBigQuiz,
    deploy: "https://ekirbs.github.io/the-big-quiz/",
    github: "https://github.com/ekirbs/the-big-quiz",
    description:
      "The BIG Quiz.  A timed quiz that stores and displays high scores.",
    technologies: [
      <h6 className="highlight html-highlight">
        <FaHtml5 className="tech-icon" />
        <span className="tech-text">HTML5</span>
      </h6>,
      <h6 className="highlight css-highlight">
        <DiCss3 className="tech-icon" />
        <span className="tech-text">CSS3</span>
      </h6>,
      <h6 className="highlight js-highlight">
        <DiJavascript1 className="tech-icon" />
        <span className="tech-text">JavaScript</span>
      </h6>,
    ],
  },
  {
    title: "Nat Park Travel Guide",
    pic: natParkTravelGuide,
    deploy: "https://ekirbs.github.io/national-park-travelers-guide/",
    github: "https://github.com/ekirbs/national-park-travelers-guide",
    description: "A Traveler's Guide to all National Parks in Northeast USA.",
    technologies: [
      <h6 className="highlight jq-highlight">
        <SiJquery className="tech-icon" />
        <span className="tech-text">JQuery</span>
      </h6>,
      <h6 className="highlight html-highlight">
        <FaHtml5 className="tech-icon" />
        <span className="tech-text">HTML5</span>
      </h6>,
      <h6 className="highlight css-highlight">
        <DiCss3 className="tech-icon" />
        <span className="tech-text">CSS3</span>
      </h6>,
      <h6 className="highlight js-highlight">
        <DiJavascript1 className="tech-icon" />
        <span className="tech-text">JavaScript</span>
      </h6>,
    ],
  },
  {
    title: "Password Generator",
    pic: randomPasswordGenerator,
    deploy: "https://ekirbs.github.io/random-password-generator/",
    github: "https://github.com/ekirbs/random-password-generator",
    description:
      "A Random Password Generator to provide secure passwords privately.",
    technologies: [
      <h6 className="highlight jq-highlight">
        <SiJquery className="tech-icon" />
        <span className="tech-text">JQuery</span>
      </h6>,
      <h6 className="highlight html-highlight">
        <FaHtml5 className="tech-icon" />
        <span className="tech-text">HTML5</span>
      </h6>,
      <h6 className="highlight css-highlight">
        <DiCss3 className="tech-icon" />
        <span className="tech-text">CSS3</span>
      </h6>,
      <h6 className="highlight js-highlight">
        <DiJavascript1 className="tech-icon" />
        <span className="tech-text">JavaScript</span>
      </h6>,
    ],
  },
  {
    title: "Weather Forecast",
    pic: weatherForecast,
    deploy: "https://ekirbs.github.io/weather-forecast-finder/",
    github: "https://github.com/ekirbs/weather-forecast-finder",
    description:
      "A Weather Forecast search function using the OpenWeatherMapAPI.",
    technologies: [
      <h6 className="highlight jq-highlight">
        <SiJquery className="tech-icon" />
        <span className="tech-text">JQuery</span>
      </h6>,
      <h6 className="highlight html-highlight">
        <FaHtml5 className="tech-icon" />
        <span className="tech-text">HTML5</span>
      </h6>,
      <h6 className="highlight css-highlight">
        <DiCss3 className="tech-icon" />
        <span className="tech-text">CSS3</span>
      </h6>,
      <h6 className="highlight js-highlight">
        <DiJavascript1 className="tech-icon" />
        <span className="tech-text">JavaScript</span>
      </h6>,
    ],
  },
  {
    title: "Express Note Taker",
    pic: expressNoteTaker,
    deploy: "#",
    github: "https://github.com/ekirbs/express-note-taker",
    description:
      "An application that stores, displays, and manages notes.  (Not currently deployed).",
    technologies: [
      <h6 className="highlight ex-highlight">
        <SiExpress className="tech-icon" />
        <span className="tech-text">Express.js</span>
      </h6>,
      <h6 className="highlight node-highlight">
        <FaNodeJs className="tech-icon" />
        <span className="tech-text">Node.js</span>
      </h6>,
      <h6 className="highlight bootstrap-highlight">
        <DiBootstrap className="tech-icon" />
        <span className="tech-text">Bootstrap</span>
      </h6>,
      <h6 className="highlight html-highlight">
        <FaHtml5 className="tech-icon" />
        <span className="tech-text">HTML5</span>
      </h6>,
      <h6 className="highlight css-highlight">
        <DiCss3 className="tech-icon" />
        <span className="tech-text">CSS3</span>
      </h6>,
      <h6 className="highlight js-highlight">
        <DiJavascript1 className="tech-icon" />
        <span className="tech-text">JavaScript</span>
      </h6>,
    ],
  },
];

export default Showcase;
