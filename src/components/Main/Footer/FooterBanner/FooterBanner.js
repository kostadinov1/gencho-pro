import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FooterBanner.module.css'
import { useTranslation } from 'react-i18next'

const FooterBanner = () => {
      const { t } = useTranslation();

  return (
    <div className={`${styles.footer_banner}`}>
        <div className={`${styles.title}`}>gencho.pro &reg; created 2022</div>
          <hr/>
        <div className={`${styles.pdiv}`}>
          Where Can You Find Us?
        </div>
        <Link to={'/contacts'}>{t('contacts')}</Link>
    </div>
  )
}

export default FooterBanner
