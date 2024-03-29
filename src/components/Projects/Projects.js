import { ProjectCard } from '../Common/ProjectCard/ProjectCard';
import styles from './Projects.module.css'

const projectCards = [
    {
        name: "DogramaVarna.net",
        status: "active",
        description: "Window Glazing Company",
        technologies: "Django Rest, React JS, AWS, Docker, Nginx, Postgres,",
        link: "https://www.dogramavarna.net",
        gitBackLink: "",
        gitFrontLink: "",
        imgUrl: "/images/projects/dogramavarna.png",
    },
    {
        name: "Dental Cabinet",
        status: "not active",
        description: "",
        technologies: "Django, Bootstrap, ",
        link: "",
        gitBackLink: "",
        gitFrontLink: "",
        imgUrl: "",
    },
    {
        name: "Gencho.pro",
        status: "active",
        description: "",
        technologies: "React JS, AWS, Docker, Nginx, Postgres,",
        link: "https://www.gencho.pro",
        gitBackLink: "",
        gitFrontLink: "",
        imgUrl: "/images/projects/gencho.png",
    },
    {
        name: "Periodization ",
        status: "not active",
        description: "",
        technologies: "Django Rest, React JS, AWS, Docker, Nginx, Postgres,",
        link: "https://www.periodization.fit",
        gitBackLink: "",
        gitFrontLink: "",
        imgUrl: "",
    },
]

const Projects = () => {

    return (
        <div className={`${styles.projects}`}>
        <div className={`${styles.title}`} >PROJECTS</div>
            
            <div className={`${styles.projects_grid}`}>

            {projectCards ?
                projectCards.map((project) => <ProjectCard project={project} />) 
            : <p>no projects</p>}
            </div>
        </div>
    )
}

export default Projects;