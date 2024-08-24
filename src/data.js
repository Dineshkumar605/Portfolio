import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaCopyright,
  FaMedium 
} from 'react-icons/fa';

import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiSpringboot,
  SiMongodb,
  SiJsonwebtokens,
  SiBootstrap
} from 'react-icons/si';

import values from 'values.js';

import alertNotification from './images/alertNotification.png';
import insurance from './images/insurance.png';
import inventory from './images/inventory.jpg';

const navLinks = [
  {
    name: 'home',
    url: '#',
  },
  {
    name: 'projects',
    url: '#projects',
  },
  {
    name: 'contact',
    url: '#contact',
  },
];

const themes = [
  {
    name: 'blue',
    color: '#2a93ec',
    clrValues: new values('#2a93ec').all(10),
  },
  {
    name: 'darkpurple',
    color: '#7952b3',
    clrValues: new values('#7952b3').all(10),
  },
  {
    name: 'pink',
    color: '#ff69b4',
    clrValues: new values('#ff69b4').all(10),
  },
  {
    name: 'silvergrey',
    color: '#C0C0C0',
    clrValues: new values('#C0C0C0').all(10),
  },
];

const socials = [
  {
    name: 'github',
    url: 'https://github.com/Dineshkumar605/',
    icon: <FaGithub />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/dinesh.kannan.71697?mibextid=ZbWKwL',
    icon: <FaFacebookF />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/dineshkumar-t-90aab6241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/dinesh___605?igsh=MWxoMnphcmVxb21mZA==',
    icon: <FaInstagram />,
  },
];

const languages = [
  {
    name: 'javascript',
    icon: <SiJavascript />,
    color: '#f0db4f',
    desc: 'JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.',
  },
  {
    name: 'react',
    icon: <SiReact />,
    color: '#61DBFB',
    desc: 'React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications.',
  },
  {
    name: 'nodejs',
    icon: <FaNodeJs />,
    color: '#68a063',
    desc: 'Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It is used for traditional web sites and back-end API services',
  },
  {
    name: 'html5',
    icon: <SiHtml5 />,
    color: '#e34c26',
    desc: 'HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.',
  },
  {
    name: 'css3',
    icon: <SiCss3 />,
    color: '#264de4',
    desc: 'CSS (Cascading Style Sheets) is used to style and layout web pages',
  },
  {
    name: 'postgres',
    icon: <SiPostgresql />,
    color: '#0064a5',
    desc: 'PostgreSQL is an advanced, enterprise class open source relational database that supports both SQL and JSON querying. It is used as the primary data store or data warehouse for many web, mobile application.',
  },
  {
    name: 'expressjs',
    icon: (
      <p className='flex-center pd-0 mg-0 tf-y-5' width='36' height='36'>
        ex
      </p>
    ),
    color: '#ffffff',
    desc: 'ExpressJS is a javascript library. The primary use of Express is to provide server-side logic for web and mobile applications, and as such it is used all over the place.',
  },
  {
    name: 'git',
    icon: <FaGitAlt />,
    color: '#f34f29',
    desc: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
  },
  {
    name: 'github',
    icon: <FaGithub />,
    color: '#ffffff',
    desc: 'Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.',
  },
  {
    name: 'java',
    icon: <FaJava />,
    color: '#6567a5',
    desc: 'Java is a versatile programming language used for building robust, high-performance applications. Its portability and extensive libraries make it ideal for both web and desktop applications, enabling developers to create scalable and secure software.',
  },
  {
    name: 'springboot',
    icon: <SiSpringboot />,
    color: '#00C7B7',
    desc: 'Spring Boot simplifies Java development by providing a convention-over-configuration approach, enabling developers to build production-ready applications with minimal setup and configuration.',
  },
  {
    name: 'camunda',
    icon: <FaCopyright />,
    color: '#ffffff',
    desc: 'Camunda provides a powerful workflow and decision automation platform, allowing businesses to design, execute, and optimize complex processes with clarity and efficiency',
  },
  {
    name: 'microservice',
    icon: <FaMedium />,
    color: '#ffffff',
    desc: 'Microservices architecture breaks down complex applications into smaller, independent services, each focused on a specific function. This modular approach enhances scalability, flexibility, and maintainability.',
  },
  {
    name: 'mongodb',
    icon: <SiMongodb />,
    color: '#589636',
    desc: 'MongoDB is a document database used to build highly available and scalable internet applications.',
  },
  {
    name: 'jwt',
    icon: <SiJsonwebtokens />,
    color: '#d63aff',
    desc: 'JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.',
  },
  {
    name: 'bootstrap',
    icon: <SiBootstrap />,
    color: '#563d7c',
    desc: 'Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages',
  }
];

const projects = [
  {
    name: 'Alert Notification Application',
    image: alertNotification,
    desc: 'I worked on the Alert Notification Application. This application is modified by Rocket which is an open source chat application. We used to react with typescript for the front end and node js for the back end. In that Rocket chat application, We customized the front end and back end for our branding. In the backend, customized notification APIs that was used to send alert notifications such as SMS, Email, and push notifications also.',
    stack: [
      'javascript',
      'react',
      'nodejs',
      'css3',
      'html5',
      'mongodb'
    ],
    featured: true,
  },
  {
    name: 'Inventory Management System',
    image: inventory,
    desc: 'The purpose of this project is to develop an automated inventory management system to streamline their inventory tracking processes. Inefficient manual inventory management practices often lead to errors, stockouts, and overstocking, resulting in financial losses and customer dissatisfaction. By implementing an automated system aims to improve inventory accuracy, optimize stock levels, and enhance overall operational efficiency.',
    stack: [
      'java',
      'springboot',
      'postgres'
    ],
    featured: true,
  },
  {
    name: 'Insurance Application',
    image: insurance,
    desc: `It is an Insurance Policy Application that helps you to get a Household Policy as well as Motor Policy.The Main Objective of an Insurance Policy Application Project is to develop a digital platform for customers to manage, purchase and claim insurance policies conveniently and efficiently.This includes features such as Policy Initialization, Quote, Policy Creation, Premium Calculations, Claims Processing, Policy Renewals, Document Management and effective communication with Stakeholders.The project aims to streamline the insurance process, improve customer experience, and enhance the company’s competitiveness in the market.`,
    stack: ['java', 'springboot', 'postgres', 'camunda'],
    featured: true,
  }
];

export { navLinks, themes, socials, languages, projects };
