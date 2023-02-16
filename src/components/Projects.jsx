import * as Unicons from '@iconscout/react-unicons';
import evBoost from '../assets/images/EV-Boost.png';
import passGen from '../assets/images/Password-Generator.png';
import soloTravel from '../assets/images/Solo-Traveler.png';
import starWars from '../assets/images/Star-Wars-Quiz.png';
import toDoList from '../assets/images/ToDo List.png';
import weather from '../assets/images/Weather-Dashboard.png';
// import workDay from '../assets/images/Work-Day-Scheduler.png';

const Projects = () => {
    const ProjectData = [
        {   name: 'Solo Traveler',
            description: 'Solo Traveler web app provides solo travelers a place to connect and plan upcoming trips. Solo Traveler allows users to create a travel profile, save trips, and connect with other solo travelers in chat rooms.',
            image: soloTravel,
            link: '',
            github: 'https://github.com/Michael-Alvarado/Solo-Traveler'
        },
        {   name: 'ToDo List',
            description: 'ToDo List is an app that allows a user to keep tracker of their todos. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express session npm package for authentication',
            image: toDoList,
            link: '',
            github: 'https://github.com/Michael-Alvarado/ToDo-List'
        },
        {   name: 'EV Boost',
            description: 'EV Boost allows users to search for Electric Vehicle chargers based on zip codes in the Austin area. Users will enter a zipcode in the Austin area and then will be able to view all charging stations within that specific postal code. The technologies used inside the webpage included 3 server APIs (Google, Weather, and OpenCharge), incorporated Bulma CSS, JS, HTML, and finally Github.',
            image: evBoost,
            link: 'https://michael-alvarado.github.io/EV-Boost/',
            github: 'https://github.com/Michael-Alvarado/EV-Boost'
        },
        {   name: 'Weather Dashboard',
            description: 'Application to capture current and future weather data using third party API calls and displays them in a dashboard. Saves previous searches to local storage for quick reference on subsequent visits to application.',
            image: weather,
            link: 'https://michael-alvarado.github.io/Weather-Dashboard/',
            github: 'https://github.com/Michael-Alvarado/Weather-Dashboard'
        },
        {   name: 'Star Wars Quiz',
            description: 'Quiz that prompts the user 5 questions based on the Star Wars film franchise. App has a start button, multiple questions, and a timer that records your initials and score at the end of the quiz. HTML, CSS, and Javascript files were created from scratch.',
            image: starWars,
            link: 'https://michael-alvarado.github.io/Star-Wars-Quiz/',
            github: 'https://github.com/Michael-Alvarado/Star-Wars-Quiz'
        },
        {   name: 'Password Generator',
            description: 'This app generates a password based on different criteria confirmed by the user using javascript. CSS & HTML pages were provided for this challenge. Inputs from user needed to be validated before generating and returning a random password.',
            image: passGen,
            link: 'https://michael-alvarado.github.io/Password-Generator/',
            github: 'https://github.com/Michael-Alvarado/Password-Generator'
        },
        // {   name: 'Work Day Scheduler',
        //     description: 'Created a single day scheduler to keep track of tasks or to-do items that day to help manage time effectively. Input fields display gray if the timeblock is in the past, red if it's the current hour, and green if it's in the future. Required use of moment.js and other third-party APIs to complete. Javascript written from scratch.',
        //     image: workDay,
        //     link: 'https://michael-alvarado.github.io/Work-Day-Scheduler/',
        //     github: 'https://github.com/Michael-Alvarado/Work-Day-Scheduler'
        // }
    ]
    
    return (
        <section id="projects" className="justify-center">
            <h2 className="font-itim text-center text-emerald font-semibold text-4xl mt-24 mb-5">
                My Projects
            </h2>
            <div className="w-full flex-auto grid justify-items-center grid-cols-1 md:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0">
                {ProjectData.map((project) => (
                    <div className="relative rounded-lg border-solid border-4 border-emerald" key={project.name}>
                        <h5 className='font-itim text-picton-blue text-2xl font-medium my-2'>{project.name}</h5>
                        <img className="rounded-t" src={project.image} alt={project.name} />
                        <div className='p-6'>
                            <p className='font-itim text-sm text-picton-blue'>{project.description}</p>
                            <div className="justify-items-center px-2 mt-3 gap-8" style={{display: 'inline-flex'}}>
                                <a href={project.github} className='text-4xl text-magnolia hover:text-light-rose transition duration-500' target='_blank' rel='noreferrer' >
                                    <Unicons.UilGithubAlt size='30' />
                                </a>
                                <a href={project.link} className='text-4xl text-magnolia hover:text-light-rose transition duration-500' target='_blank' rel='noreferrer' >
                                    <Unicons.UilPlay size='30' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;