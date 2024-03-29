import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import FooterBanner from './FooterBanner/FooterBanner'

import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'

function Footer() {

      const { t } = useTranslation();


  return (
    <section className={styles.footer}>
        <ul className={styles.ul}>
            <li className={styles.li}><Link to={`/`}>{t('home')}</Link></li>
            <li className={styles.li}><Link to={`/projects`}>{t('projects')}</Link></li>
            <li className={styles.li}><Link to={'/contacts'}> {t('contacts')}</Link></li>
        </ul>
        <Link className={`${styles.credits}`} to={'/credits'}>IMAGES USED IN THIS WEBSITE - THANK YOU!!!</Link>
        <FooterBanner ></FooterBanner>
        <div className={styles.langswitcher}>
          <LanguageSwitcher></LanguageSwitcher>
        </div>

    </section>
  )
}

export default Footer
