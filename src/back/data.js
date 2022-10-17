import { images } from '../constants'

export const abouts = [
  {
    title: "Frontend Developer",
    description:
      "My passion is developing and designing friendly, modern interfaces. In the world of technology, there is always something new to learn, so I like to test myself and try new things.",
    imgUrl: images.about01,
  },
  {
    title: "Full Stack Developer",
    description:
      "I also have experience with databases, backends, and infrastructure. In order to create more robust and complex applications, I believe this is very important.",
    imgUrl: images.about03,
  },
  {
    title: "React Developer",
    description:
      "React is my favorite JavaScript library for creating user interfaces",
    imgUrl: images.about02,
  },
];
  
export const worksData = [
    {
        title: 'Modern Real Estate Website',
        description: 'An modern interactive React Website',
        projectLink: 'https://nimble-gingersnap-217942.netlify.app/',
        codeLink: 'https://github.com/felipeVerger',
        imgUrl: images.realEstateWork,
        tags: ['Web App', 'Next JS']
    },
    {
        title: 'Travel Landing Page',
        description: 'Landing page for travellers ',
        projectLink: 'https://felipeverger.github.io/landing-page-travel/',
        codeLink: 'https://github.com/felipeVerger/landing-page-travel',
        imgUrl: images.travellersWork,
        tags: ['All', 'Web App', 'React JS']
    },
    {
        title: 'Food Recipe Project ',
        description: 'App for Cuisine Lovers',
        projectLink: 'http://localhost:3000',
        codeLink: 'https://github.com/felipeVerger/Deliciousss',
        imgUrl: images.foodWork,
        tags: ['All', 'React JS']
    },
    {
        title: 'ToDo App',
        description: 'Create, update, delete, and mark tasks as done with this modern and intuitive application',
        projectLink: 'https://todo-app-tasks-felipe.netlify.app',
        codeLink: 'https://github.com/felipeVerger/todo-app',
        imgUrl: images.todoapp,
        tags: ['All', 'React JS', 'Web App']
    },
    {
        title: 'Card Details',
        description: 'A simple and modern card details page',
        projectLink: 'https://felipeverger.github.io/card-details/',
        codeLink: 'https://github.com/felipeVerger/card-details',
        imgUrl: images.carddetails,
        tags: ['All', 'React JS', 'Web App']
    },
    {
        title: 'Gym Exercises',
        description: 'On this page you will find the exercises you are looking for.',
        projectLink: 'https://gym-exercises-felipe.netlify.app',
        codeLink: 'https://github.com/felipeVerger/gym-excercises-clone',
        imgUrl: images.gymexercises,
        tags: ['All', 'React JS', 'Web App']
    },
    {
        title: 'Space Tourism',
        description: 'Modern web app for space tourism',
        projectLink: 'https://space-tourism-fv.netlify.app',
        codeLink: 'https://github.com/felipeVerger/space-tourism',
        imgUrl: images.spaceTourism,
        tags: ['All', 'React JS', 'Web App']
    }
]

export const skills = [
    {
        name: 'JavaScript',
        bgColor: '#edf2f8',
        icon: images.javascript
    },
    {
        name: 'HTML',
        bgColor: '#edf2f8',
        icon: images.html
    },
    {
        name: 'CSS',
        bgColor: '#edf2f8',
        icon: images.css
    },
    {
        name: 'React',
        bgColor: '#edf2f8',
        icon: images.react
    },
    {
        name: 'Redux',
        bgColor: '#edf2f8',
        icon: images.redux
    },
    {
        name: 'Node',
        bgColor: '#edf2f8',
        icon: images.node
    },
    {
        name: 'Express',
        bgColor: '#edf2f8',
        icon: images.express
    },
    {
        name: 'Typescript',
        bgColor: '#edf2f8',
        icon: images.typescript
    },
    {
        name: 'MongoDB',
        bgColor: '#edf2f8',
        icon: images.mongodb
    },
    {
        name: 'MySQL',
        bgColor: '#edf2f8',
        icon: images.mysql
    },
    {
        name: 'Git',
        bgColor: '#edf2f8',
        icon: images.git
    },
    {
        name: 'Sass',
        bgColor: '#edf2f8',
        icon: images.sass
    }
]

export const experiences = [
    {
        year: 2022,
        works: [
            {
                name: 'Frontend Developer',
                company: 'Digital House',
                description: 'I worked as a Frontend Developer in a project to simulate a work environment',
            }
        ]
    }
]