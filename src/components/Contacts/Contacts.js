
import React, { useRef } from 'react'
import styles from './Contacts.module.css'
import  EmailJSResponseStatus  from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha';

function Contacts() {
	const form = useRef();

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
        <h1>Contacts</h1>

        <form ref={form} onSubmit={onSubmitHandler}  className={`${styles.form}`} >

                <input  type='text' placeholder='Name' name='name' className={`${styles.input}`} />

                <input  type='email' placeholder='Email' name='email' className={`${styles.input}`} />

                <textarea  placeholder='Message' name='message' className={`${styles.input}`} />
				<ReCAPTCHA
					sitekey={`${process.env.REACT_APP_EMAILJS_SITE_KEY}`}
					/>

            <button className={`${styles.button}`} >Send</button>

        </form>
      </div>
    </div>
  )
}

export default Contacts
