import React from 'react'
import styles from './Login.module.css'
import WaveButton from '../Common/WaveButton/WaveButton'

function Login() {
  return (
      <div className={`${styles.login}`}>
        <WaveButton></WaveButton>
      </div>
  )
}

export default Login
