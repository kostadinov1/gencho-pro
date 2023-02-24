
import React from 'react'
import './contacts.css'

function Contacts() {
  return (
    <section className='contacts'>
		<div className='form-box'>
			<h1>Get in touch</h1>
			<div className='contact-form'>
				<form  action='' method=''>
					<div className='input'>
						<input placeholder='Email'></input>
						<input placeholder='Title'></input>
					</div>
					<textarea rows={6}></textarea>
					<button>Send Message</button>
				</form>
			</div>
		</div>
    </section>
  )
}

export default Contacts
