import React from 'react'
import emailjs from 'emailjs-com'
import '../../Scss/ResetPassword/ResetPasswordStyle.css'

const ResetPassword = () => {
	function sendEmail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault() //This is important, i'm not sure why, but the email won't send without it

		emailjs
			.sendForm(
				'service_2jsay1a',
				'template_us8cfx8',
				e.target as HTMLFormElement,
				'OwiHH7DBHI-85orDV'
			)
			.then(
				result => {
					window.location.reload() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
				},
				error => {
					console.log(error.text)
				}
			)
	}

	return (
		<div className='resetPass'>
			<form
				className='contact-form flex flex-col items-center'
				onSubmit={sendEmail}
			>
				<label>Ваше имя(которое указано в профиле):</label>
				<input type='text' name='contact_email' />
				<label>Ваше имя(которое указано в профиле):</label>
				<input type='text' name='from_name' />
				<label>Email</label>
				<input type='email' name='from_email' />
				<label>Сообщение</label>
				<textarea name='message' />
				<input type='submit' value='Отправить' />
			</form>
		</div>
	)
}

export default ResetPassword
