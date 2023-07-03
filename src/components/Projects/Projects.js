import { ProjectCard } from '../Common/ProjectCard/ProjectCard';
import styles from './Projects.module.css'

const projectCards = [
    {
        name: "DogramaVarna.net",
        link: "dogramavarna.net",
        gitLink: "",
        imgUrl: "",
    }
]


const Projects = () => {




    return (
        <div className={`${styles.projects}`}>
           {projectCards ?
            projectCards.map((project) => <ProjectCard project={project} />) 
           : <p>no projects</p>}
        </div>
    )
}

export default Projects;