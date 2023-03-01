
import React from 'react'
import './contacts.css'

function Contacts() {
  return (
    <section className='contacts'>
		<div className='form-box'>
			<h1>Page in progress</h1>
			<h1>Get in touch</h1>
			<form  action='' className='contact-form'>
				<input placeholder='Email'></input>
				<input placeholder='Title'></input>
				<textarea rows={6} placeholder='Enter Your message here!'></textarea>
				<button>Send Message</button>
			</form>
		</div>
    </section>
  )
}

export default Contacts
