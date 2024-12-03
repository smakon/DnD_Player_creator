import { useState } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { setCookie } from '../../functions/cookies'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { findUser } from '../../functions/user'
import { createNotify } from '../../functions/notify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { show_hide_password } from '../../functions/functions'

const Login = () => {
	const [eye, setEye] = useState<React.ReactNode>(<EyeOutlined />)

	function getFormData() {
		const inputName = document.querySelector('.name__input') as HTMLInputElement
		const inputPassword = document.querySelector(
			'.password__input'
		) as HTMLInputElement

		const name = inputName.value
		const password = inputPassword.value
		if (name.length == 0 || password.length == 0) {
			createNotify('error', 'Введите все данные')
		} else {
			findUser(name, password).then(user => {
				const data = user.data
				console.log(data);
				
				if (Array.isArray(data)) {
					createNotify('success', 'Вход успешно выполнен')
					setCookie('id', data[0].id, 1)
					window.location.href = '/'
				} else if (data == false) {
					createNotify('error', 'Неверный пароль')
				}
				else if (data == "No user found") {
					createNotify('error', 'Пользователь с таким именем не найден')
				}
				else{
					createNotify('error', 'Что-то пошло не так')
				}

			})
		}
	}

	return (
		<>
			<Flex vertical={true} justify='center' align='center'>
				<div className='login wrapper'>
					<form className='login__from'>
						<Flex vertical={true} justify='center' align='center' gap={'2rem'}>
							<h2>Вход</h2>
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
							label='Войти'
							className='button__submit'
							style={{
								marginTop: '3rem',
								fontWeight: 'bold',
								backgroundColor: '#ffaa00',
								height: '4dvh',
							}}
						/>
						<Link to={'/forgotPassword'} className='__link'>
							Забыли пароль?
						</Link>
						<Link to={'/registration'} className='__link'>
							Зарегистрироваться
						</Link>
					</form>
				</div>
				<ToastContainer />
			</Flex>
		</>
	)
}

export default Login
