import { useEffect, useState } from 'react'
import '../../Scss/reg.css'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { getCookie } from '../../functions/cookies'


const Registration = () => {
	const [eye, setEye] = useState(<EyeOutlined />)

	useEffect(() => {
		if (getCookie('id') != null) {
			document.location.href = '/'
		} else {
			return
		}
	}, [])

	function show_hide_password() {
		let input = document.querySelector('.password__input') as HTMLInputElement
		let target = document.querySelector('.button_show') as HTMLInputElement
		if (input.getAttribute('type') === 'password') {
			target.classList.add('view')
			setEye(<EyeInvisibleOutlined />)
			input.setAttribute('type', 'text')
		} else {
			target.classList.remove('view')
			setEye(<EyeOutlined />)
			input.setAttribute('type', 'password')
		}
		return false
	}

	return (
		<>
			{/* <Header /> */}
			<Flex
				vertical={true}
				style={{
					width: '100dvw',
					height: '100dvh',
				}}
				justify='center'
				align='center'
			>
				<div className='wrapper bg-slate-950'>
					<form className='registration__from'>
						<input type='text' placeholder='Имя' />
						<div className='password__input__wrapper'>
							<input
								type='password'
								placeholder='Пароль'
								className='password__input'
							/>
							<button
								type='button'
								onClick={() => show_hide_password()}
								className='button_show'
							>
								{eye}
							</button>
						</div>
					</form>
				</div>
			</Flex>
		</>
	)
}

export default Registration
