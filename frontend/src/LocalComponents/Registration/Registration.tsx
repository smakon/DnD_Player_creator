import { useEffect, useState } from 'react'
import '../../Scss/Registration/Registration.css'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { getCookie } from '../../functions/cookies'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

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
			<Flex vertical={true} justify='center' align='center'>
				<div className='registration wrapper'>
					<form className='registration__from'>
						<Flex vertical={true} justify='center' align='center' gap={'2rem'}>
							<h2>Регистрация</h2>
							<CgProfile className='profile__svg' />
							<div className='inputs__wrapper'>
								<Flex
									vertical={true}
									justify='center'
									align='center'
									gap={'2rem'}
								>
									<Input
										type='text'
										placeholder='Имя'
										style={{
											width: '16rem',
										}}
										inputSize='large'
									/>
									<div className='password__input__wrapper'>
										<Input
											type='password'
											placeholder='Пароль'
											className='password__input'
											style={{
												borderRadius: '1rem 0 0 1rem',
											}}
											inputSize='large'
										/>
										<Button
											onClick={() => show_hide_password()}
											className='button_show'
											style={{
												borderRadius: '0 1rem 1rem 0',
												height: '4.5dvh',
											}}
										>
											{eye}
										</Button>
									</div>
								</Flex>
							</div>
						</Flex>
						<Button
							label='Зарегистрироваться'
							className='button__submit'
							style={{
								marginTop: '3rem',
								fontWeight: 'bold',
							}}
						/>
						<Link to={'/login'} className='login__link'>Войти</Link>
					</form>
				</div>
			</Flex>
		</>
	)
}

export default Registration
