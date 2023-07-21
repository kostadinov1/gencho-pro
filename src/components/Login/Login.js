import React, { useRef, useState } from 'react'
import styles from './Login.module.css'
import WaveButton from '../Common/WaveButton/WaveButton'
import  EmailJSResponseStatus  from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha';
import Mail from '../Common/Mail/Mail';


function Login() {
	const form = useRef();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		secret_phrase: "",
	})
	
	const onSubmitHandler = (e) => {
		e.preventDefault()
		// TODO 
		//make API call
		EmailJSResponseStatus.sendForm(
			process.env.REACT_APP_EMAILJS_SERVICE_ID,
			'contact_form',
			form.current,
			process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
		.then((result) => {
			console.log(result.text, 'FORM SENT');
		}, (error) => {
			console.log(error.text, 'ERROR SENDING FORM');
		});

	}

	const onChangeHandler = (e) => {
		e.preventDefault()
		setFormData((state) => ({...state, [e.target.name]: e.target.value}))


	}

  return (
      <div className={`${styles.login}`}>

        <div className={`${styles.form_box}`}>
		<div className={`${styles.title}`} >LOGIN</div>

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
			<ReCAPTCHA
					className={`${styles.recaptcha}`}
					size='normal'
					theme='dark'
					sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
					/>
				<button className={`${styles.button}`}>LOGIN</button>
			</form>
        	{/* <WaveButton></WaveButton> */}
        </div>
      </div>
  )
}

export default Login
