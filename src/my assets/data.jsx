import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/sapper.jpg';
import Work2 from './assets/COLOR.jpg';
import Work3 from './assets/currency.jpg';
import Work4 from './assets/CHESS.jpg';
import Work5 from './assets/weather.jpg'
import Work7 from './assets/quiz.avif';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mariia',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ziangirova',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '34 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Ukrainian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Germany',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+49 162 380 1217',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mariianader2305@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'mariianader2305',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'German, English, French, Russian, Ukrainian',
  },
];

export const stats = [
  {
    id: 1,
    no: '1.5+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '15+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '10+',
    title: 'Happy <br /> Customers',
  },
  {
    id: 3,
    no: '15+',
    title: 'Modern Technologies <br /> Acknowladged',
  },


];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Front-end   Developer',
    desc: 'SLAs development, designing, and implementation of new features. Work with cross-functional teams to deliver high-quality products.',
  },



  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2011',
    title: 'Bachalor Degree in Phylology<span> Gorlovka State University </span>',
    desc: 'English & French languages and World Literature',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Bachalor Degree <span> Donetsk Technical University </span>',
    desc: 'The Faculty of Automation of Information Technologies',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023-2024',
    title: 'Starta Institute Berlin',
    desc: 'Front-end Development',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 4,
    title: 'React',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '50',
  },

  {
    id: 6,
    title: 'Jest',
    percentage: '60',
  },

  {
    id: 7,
    title: 'MongoDB',
    percentage: '85',
  },

  {
    id: 8,
    title: 'My SQL',
    percentage: '65',
  },
  {
    id: 9,
    title: 'Node JS',
    percentage: '40',
  },
  {
    id: 10,
    title: 'Material UI',
    percentage: '55',
  },
  {
    id: 11,
    title: 'Linux',
    percentage: '85',
  },
  {
    id: 12,
    title: 'RestFull API',
    percentage: '95',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Sapper Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Sapper Game',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Selfdevelopment',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/mariiaz2306/sapper-game',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Color Guessing Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Game',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Selfdevelopment',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/mariiaz2306/color-guessing-game',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Currency Converter',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'APP',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'SelfEducation',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/mariiaz2306/currency-converter',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Chess Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Game',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Selfeducation',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/mariiaz2306/chess-app2',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Weather App',
    details: [
      {
        title: 'Project : ',
        desc: 'APP',
      },
      {
        title: 'Client : ',
        desc: 'Educational',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Axios',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/mariiaz2306/REACT_WEATHER_APP',
      },
    ],
  },

  {
    id: 6,
    img: Work7,
    title: 'Quiz App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'APP',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Educational',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/mariiaz2306/QUIZ_SLA_REACT_PROJECT/tree/main',
      },
      
    ],
  },

];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
