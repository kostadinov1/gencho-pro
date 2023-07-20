
import React from 'react'
import styles from './ProjectCard.module.css'

export const ProjectCard = ({project}) => {
  console.log(project);
  return (
    
<div className={`${styles.flip_card_container} ${styles.hue_220}`} >
  <div className={`${styles.flip_card}`}>

    <div className={`${styles.card_front}`}>
      <figure className={`${styles.figure}`}>
        <div className={`${styles.img_bg}`}></div>
        <img className={`${styles.img}`}  src={project.imgUrl} alt=""/>
        <figcaption className={`${styles.figcaption}`}>{project.name}</figcaption>
      </figure>

      <ul className={`${styles.ul}`}>
        <li className={`${styles.li}`}>{project.description}</li>
        <li className={`${styles.li}`}>{project.technologies}</li>
      </ul>
    </div>

    <div className={`${styles.card_back}`}>
      <figure className={`${styles.figure}`}>
        <div className={`${styles.img_bg}`}></div>
        <img className={`${styles.img}`}  src={project.imgUrl} alt=""/>
      </figure>

      <button className={`${styles.button}`}><a href={project.link}>Check It Out</a></button>

      <div className={`${styles.design_container}`}>
        <span className={`${styles.design} ${styles.design_1}`} ></span>
        <span className={`${styles.design} ${styles.design_2}`} ></span>
        <span className={`${styles.design} ${styles.design_3}`} ></span>
        <span className={`${styles.design} ${styles.design_4}`} ></span>
        <span className={`${styles.design} ${styles.design_5}`} ></span>
        <span className={`${styles.design} ${styles.design_6}`} ></span>
        <span className={`${styles.design} ${styles.design_7}`} ></span>
        <span className={`${styles.design} ${styles.design_8}`} ></span>
      </div>
    </div>

  </div>
</div>

  )
}
