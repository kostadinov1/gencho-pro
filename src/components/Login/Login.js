import React, { useState } from 'react'
import styles from './Login.module.css'
import WaveButton from '../Common/WaveButton/WaveButton'


function Login() {

	const [formData, setFormData] = useState({
		email: "",
		password: "",
		secret_phrase: "",
	})
	
	const onSubmitHandler = (e) => {
		e.preventDefault()
		// TODO 
		//make API call

	}

	const onChangeHandler = (e) => {
		e.preventDefault()
		setFormData((state) => ({...state, [e.target.name]: e.target.value}))

	}

  return (
      <div className={`${styles.login}`}>

        <div className={`${styles.form_box}`}>
			<form onSubmit={onSubmitHandler} className={`${styles.form}`}>

			<div className={`${styles.input_box}`}>
				<label className={`${styles.label}`}>Email</label>
				<input 
					type='email'
					value={formData.email}
					onChange={onChangeHandler}
					className={`${styles.input}`} 
					placeholder='Enter Your Email'  />
			</div>
			<div className={`${styles.input_box}`}>
				<label className={`${styles.label}`}>Password</label>
				<input 
					type='password'
					value={formData.password}
					onChange={onChangeHandler}
					className={`${styles.input}`} 
					placeholder='Enter Your Password'  />
			</div>
			<div className={`${styles.input_box}`}>
				<label className={`${styles.label}`}>Secret Phrase</label>
				<input 
					type='password'
					value={formData.secret_phrase}
					onChange={onChangeHandler}
					className={`${styles.input}`} 
					placeholder='Only for the chosen one!'  />
			</div>
				<button className={`${styles.button}`}>LOGIN</button>
			</form>
        	{/* <WaveButton></WaveButton> */}
        </div>
      </div>
  )
}

export default Login
