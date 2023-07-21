
import React, { useRef, useState } from 'react'
import styles from './Contacts.module.css'
import  EmailJSResponseStatus  from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha';
import Mail from '../Common/Mail/Mail';

function Contacts() {
	const form = useRef();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})
	

	const onChangeHandler = (e) => {
		e.preventDefault()
		setFormData((state) => ({...state, [e.target.name]: e.target.value}))

	}
	const onSubmitHandler = (e) => {
		e.preventDefault()
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

  return (
    <div className={`${styles.contacts}`}>

      <div className={`${styles.form_box}`} >
      <div className={`${styles.title}`} >CONTACTS</div>

        <form ref={form} onSubmit={onSubmitHandler}  className={`${styles.form}`} >

              
			<div className={`${styles.input_box}`}>
				<label className={`${styles.label}`}>Name</label>
				<input 
					type='text'
					value={formData.name}
					onChange={onChangeHandler}
					className={`${styles.input}`} 
					placeholder='Enter Your Name'  />
			</div>

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
				<label className={`${styles.label}`}>Message</label>
                <textarea 
					value={formData.message}
					onChange={onChangeHandler}
					 placeholder='Message'
					 name='message'	
					 className={`${styles.input}`} 
					 />
			</div>

				<ReCAPTCHA
					className={`${styles.recaptcha}`}
					size='normal'
					theme='dark'
					sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
					/>

            <button className={`${styles.button}`} >Send</button>

        </form>
      </div>
	  <Mail></Mail>
    </div>
  )
}

export default Contacts
