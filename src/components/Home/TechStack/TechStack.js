
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
        { rootMargin: "-50px" }
      );
      console.log(isIntersecting);
      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, [isIntersecting]);
  
  
    return (
      <div className={`${styles.techstack}`} ref={ref}>
        <div className={`${styles.child_1} ${styles.child} ${isIntersecting ? styles.slide_in : ''}`}>
            <h2 className={`${styles.tech_title}`}>Tech Stack</h2>
            <p></p>
 
        </div>
        <div className={`${styles.child_2} ${styles.child} ${isIntersecting ? styles.slide_in : ''}`}>
            <h2 className={`${styles.child_title}`}>Frontend Development</h2>
            <ul className={`${styles.child_ul}`}>
                <li className={`${styles.child_li}`}>
                    <img 
                        className={`${styles.child_li_img}`}
                        alt='' src='/images/icons/node-js.png' />
                     Node JS
                </li>
                <li className={`${styles.child_li}`}>
                    <img 
                        className={`${styles.child_li_img}`}
                        alt='' src='/images/icons/js.png' />
                     Javascript
                </li>
                <li className={`${styles.child_li}`}>
                    <img 
                        className={`${styles.child_li_img}`}
                        alt='' src='/images/icons/science.png' />
                     React JS
                </li>
                <li className={`${styles.child_li}`}>
                    <img 
                        className={`${styles.child_li_img}`}
                        alt='' src='/images/icons/html-5.png' />
                     HTML 5
                </li>
                <li className={`${styles.child_li}`}>
                    <img 
                        className={`${styles.child_li_img}`}
                        alt='' src='/images/icons/css-3.png' />
                     CSS 3
                </li>
                <li> </li>
            </ul>
        </div>
        <div className={`${styles.child_3} ${styles.child} ${isIntersecting ? styles.slide_in : ''}`}>
        <h2 className={`${styles.child_title}`}>Backend Development</h2>
            <ul className={`${styles.child_ul}`}>
            <li className={`${styles.child_li}`}>
                <img 
                    className={`${styles.child_li_img}`}
                    alt='' src='/images/icons/python.png' />
                 Python
            </li>
            <li className={`${styles.child_li}`}>
                <img 
                    className={`${styles.child_li_img}`}
                    alt='' src='/images/icons/django.png' />
                Django
            </li>
            <li className={`${styles.child_li}`}>
                <img 
                    className={`${styles.child_li_img}`}
                    alt='' src='/images/icons/postgre.png' />
                Postgresql
            </li>
                
            </ul>
        </div>
        <div className={`${styles.child_4} ${styles.child} ${isIntersecting ? styles.slide_in : ''}`}>
        <h2 className={`${styles.child_title}`}>Other Technologies</h2>
            <ul className={`${styles.child_ul}`}>
            <li className={`${styles.child_li}`}>
                <img 
                    className={`${styles.child_li_img}`}
                    alt='' src='/images/icons/ubuntu.png' />
                Ubuntu
            </li>
            <li className={`${styles.child_li}`}>
                <img 
                    className={`${styles.child_li_img}`}
                    alt='' src='/images/icons/gnu-bash.png' />
                BASH
            </li>
            <li className={`${styles.child_li}`}>
                <img 
                    className={`${styles.child_li_img}`}
                    alt='' src='/images/icons/docker.png' />
                Docker
            </li>
            <li className={`${styles.child_li}`}>
                <img 
                    className={`${styles.child_li_img}`}
                    alt='' src='/images/icons/nginx.png' />
                Nginx
            </li>
            <li className={`${styles.child_li}`}>
                <img 
                    className={`${styles.child_li_img}`}
                    alt='' src='/images/icons/social.png' />
                AWS
            </li>
            </ul>
        </div>
      </div>
    );
  }


export default TechStack