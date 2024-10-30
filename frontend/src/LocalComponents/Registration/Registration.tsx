import { useEffect, useState } from 'react'
import '../../Scss/RegistrationLogin/RegistrationLogin.css'
import { EyeOutlined} from '@ant-design/icons'
import { Flex } from 'antd'
import { getCookie } from '../../functions/cookies'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { createUser } from '../../functions/user'
import { createNotify } from '../../functions/notify'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { show_hide_password } from '../../functions/functions'

const Registration = () => {
	const [eye, setEye] = useState<React.ReactNode>(<EyeOutlined />)

	useEffect(() => {
		if (getCookie('id') != null) {
			document.location.href = '/'
		} else {
			return
		}
	}, [])

	

	function getFormData() {
		const inputName = document.querySelector('.name__input') as HTMLInputElement
		const inputPassword = document.querySelector(
			'.password__input'
		) as HTMLInputElement
		const name = inputName.value
		const password = inputPassword.value

		if (password.length == 0) {
			createNotify('error', 'Введите пароль')
		} else if (name.length == 0) {
			createNotify('error', 'Введите имя')
		} else if (password.length < 8) {
			createNotify('error', 'Пароль должен быть не менее 8 символов')
		} else if (name.length < 3) {
			createNotify('error', 'Имя должно быть не менее 3 символов')
		} else if (
			name.includes(' ') ||
			name.includes('@') ||
			name.includes('.') ||
			name.includes('#') ||
			name.includes('$') ||
			name.includes('%') ||
			name.includes('*') ||
			name.includes('&')
		) {
			createNotify('error', 'Имя не должно содержать пробелы')
		} else if (name.length == 0 || password.length == 0) {
			createNotify('error', 'Введите все данные')
		} else {
			createUser(name, password).then(res => {
				if (res.data) {
					document.location.href = '/login'
				} else {
					createNotify('info', 'Видимо пользователь с таким именем уже есть')
				}
			})
		}
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
										name='name'
										type='text'
										placeholder='Имя'
										inputSize='large'
										className='name__input'
										required={true}
									/>
									<div className='password__input__wrapper'>
										<Input
											name='password'
											type='password'
											placeholder='Пароль'
											className='password__input'
											style={{
												borderRadius: '1rem 0 0 1rem',
											}}
											inputSize='large'
											required={true}
										/>
										<Button
											id='btnShow'
											onClick={() => show_hide_password(setEye)}
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
							id='btnSubmit'
							onClick={() => getFormData()}
							label='Зарегистрироваться'
							className='button__submit'
							style={{
								marginTop: '3rem',
								fontWeight: 'bold',
								backgroundColor: '#ffaa00',
								height: '4dvh',
							}}
						/>
						<Link to={'/login'} className='__link'>
							Войти
						</Link>
					</form>
				</div>
				<ToastContainer />
			</Flex>
		</>
	)
}

export default Registration
