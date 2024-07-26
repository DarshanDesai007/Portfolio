import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'weather details application',
        description: "Built an intuitive city weather application providing real-time weather updates and forecasts through seamless API integration",
        tools: ['Express', 'HTML', 'Weather API', 'Node','Javascript'],
        role: 'Software Developer Intern',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'online grocery store',
        description: 'Developed a online grocery store platform, enabling convenient shopping and efficient home delivery through streamlined digital services.',
        tools: ['React', 'bcryptjs', "jsonwebtoken", "Bootstrap","mongoose", "multer", "mongodb", "Node", "Express"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },    
    {
        id: 3,
        name: 'CRUD operations Api',
        description: "Implemented comprehensive CRUD operations in a Node.js application using both MongoDB and MySQL databases to enhance data handling and storage capabilities.",
        tools: ['MySql', 'mongodb', 'Node', 'Express', "Rest Api"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Developer',
    },
    {
        id: 4,
        name: 'Event Management System',
        description: "Developed a robust event management system that facilitates seamless organization, registration, and tracking of various events.",
        tools: ['MySql', 'Asp.net', 'Linq', 'MVC', "Rest Api"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Developer',
    },
    {
        id: 5,
        name: 'landing page for a shoe e-commerce website',
        description: '"Crafted a visually appealing and user-friendly landing page for a shoe e-commerce site to enhance customer engagement and increase conversions.',
        tools: ['React', 'Bootstrap', 'Express'],
        code: '',
        role: 'Software Developer Intern',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
