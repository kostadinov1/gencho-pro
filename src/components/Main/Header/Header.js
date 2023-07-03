import styles from './Header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { HomeFilled, PhoneFilled, ScheduleFilled, UserOutlined} from '@ant-design/icons';

import { useTranslation } from 'react-i18next'
 
  
function Header() {
    const { t } = useTranslation();

    return (
        
        <div className={`${styles.header}`}>
            <div className={styles.logo}>
                <Link to={'/'}>
                    <img src='/logo/dogramaLogoOnly.png'  alt='' className={styles.logo_image} />
                </Link>
                <h1>Gencho</h1>
            </div>
            <nav className={styles.ul}>
                <NavLink to={'/'} 
                    activeClassName={'active'} 
                    className={styles.link}> 
                    <HomeFilled className={`${styles.icon}`}/> {t('home')}
                </NavLink>
                <NavLink to={'/projects'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ScheduleFilled className={`${styles.icon}`}/> {t('projects')}
                </NavLink>
                <NavLink to={'/contacts'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <PhoneFilled className={`${styles.icon}`}/> {t('contacts')}
                </NavLink>
                <NavLink to={'/login'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <UserOutlined className={`${styles.icon}`}/> {t('login')}
                </NavLink>
            </nav>    
        </div>
    )
    }

export default Header
