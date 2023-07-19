
import styles from './TechStack.module.css'
import React, { useEffect, useRef, useState } from 'react'

const TechStack = () => {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" }
      );
      console.log(isIntersecting);
      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, [isIntersecting]);
  
  
    return (
      <div className={`${styles.techstack}`} ref={ref}>

        <div className={`${styles.child_1} ${styles.child} ${isIntersecting ? styles.slide_in : ''}`}>
            <h2 className={`${styles.child_title}`}>Front-End Development</h2>
            <ul className={`${styles.child_ul}`}>
                <li className={`${styles.child_li}`}> icon React JS</li>
                <li className={`${styles.child_li}`}> icon HTML 5</li>
                <li className={`${styles.child_li}`}> icon CSS 3</li>
                <li> </li>
            </ul>
        </div>
        <div className={`${styles.child_2} ${styles.child} ${isIntersecting ? styles.slide_in : ''}`}>
        <h2 className={`${styles.child_title}`}>Back-End Development</h2>
            <ul className={`${styles.child_ul}`}>
                <li className={`${styles.child_li}`}> icon Django</li>
                <li className={`${styles.child_li}`}> icon Django REST</li>
                <li className={`${styles.child_li}`}> icon </li>
            </ul>
        </div>
        <div className={`${styles.child_3} ${styles.child} ${isIntersecting ? styles.slide_in : ''}`}>
        <h2 className={`${styles.child_title}`}>Back-End Development</h2>
            <ul className={`${styles.child_ul}`}>
                <li className={`${styles.child_li}`}> icon Django</li>
                <li className={`${styles.child_li}`}> icon Django REST</li>
                <li className={`${styles.child_li}`}> icon </li>
            </ul>
        </div>
      </div>
    );
  }


export default TechStack