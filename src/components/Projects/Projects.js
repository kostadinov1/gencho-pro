import { ProjectCard } from '../Common/ProjectCard/ProjectCard';
import styles from './Projects.module.css'

const Projects = () => {

    return (
        <div className={`${styles.projects}`}>
            <ProjectCard></ProjectCard>
        </div>
    )
}

export default Projects;