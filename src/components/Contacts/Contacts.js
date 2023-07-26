
import React, { useRef, useState } from 'react'
import styles from './Contacts.module.css'
import  EmailJSResponseStatus  from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha';
import Mail from '../Common/Mail/Mail';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';


function Contacts() {
	const form = useRef();
	const navigate = useNavigate()
	const [messageApi, contextHolder] = message.useMessage();

	// TODO FORM VALIDATIONS


	const onSubmitHandler = (e) => {
		e.preventDefault()

		EmailJSResponseStatus.sendForm(
			process.env.REACT_APP_EMAILJS_SERVICE_ID,
			'contact_form',
			form.current,
			process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
		.then((result) => {
			messageApi.success('MESSAGE SENT!');
			setTimeout(5000)
			navigate('/');
			console.log(result.text, 'FORM SENT');
		}, (error) => {
			messageApi.error('ERROR SENDING MESSAGE!');
			console.log(error.text, 'ERROR SENDING FORM');
		});
	}

  return (
    <div className={`${styles.contacts}`}>

      <div className={`${styles.form_box}`} >
      <div className={`${styles.title}`} >CONTACTS</div>
		<div className={`${styles.form_box}`}>

        <form ref={form} onSubmit={onSubmitHandler}  className={`${styles.form}`} >
		<label className={`${styles.label}`}>Name</label>

			<input
				type='text'
				placeholder='Enter Your Name'
				name='name'
				className={`${styles.input}`}
				/>
				<label className={`${styles.label}`}>Email</label>

			<input
				type='email'
				placeholder='Enter Your Email'
				name='email'
				className={`${styles.input}`}
				/>
			<label className={`${styles.label}`}>Message</label>
			<textarea
				ows={7}
				placeholder='Enter Your Message'
				name='message'
				className={`${styles.input}`}
				/>
			<ReCAPTCHA
					className={`${styles.recaptcha}`}
					size='normal'
					theme='dark'
					sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
					/>
      		{contextHolder}
            <button className={`${styles.button}`} >
				Send
				<div className={`${styles.wave}`}></div>
				</button>
        </form>
		</div>
      </div>
	  <Mail  className={`${styles.mail_icon}`} ></Mail>
    </div>
  )
}

export default Contacts
