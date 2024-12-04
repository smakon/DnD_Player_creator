import { getCookie } from '../../functions/cookies'
import { Select, Switch } from 'antd'
import i18n from '../../i18n'
import '../../Scss/Profile/Profile.css'
import { updateUser } from '../../functions/user'
import { useEffect, useState } from 'react'
import GetOutDesktop from '../Buttons/getOutButtonDesktop/getOutDesktop'
import GetOutMobile from '../Buttons/getOutButtonMobile/getOutMobile'

const device = require('current-device').default

export interface ProfileProps {
	userAccount: {
		id: number | string
		name: string
		password: string
	}
	userData: {
		user_id: number | string
		theme: number | string
		vibration: number | string
		language: string
		dice_count: number | string
	}
	userCharacters: {
		id: number
		user_id: number
		name: string
		class: string
		race: string
		create_date: string
		level: number
		created_at: string
	}[]
	userBook: object[]
	language: string
	setLanguage: (value: string) => void
	t: (value: string) => string
	setVibration: (value: number) => void
	vibration: number
	currentDevice: string
}

const Profile = ({
	userAccount,
	userData,
	userCharacters,
	userBook,
	vibration,
	language,
	setLanguage,
	setVibration,
	t,
	currentDevice,
}: ProfileProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	
	useEffect(() => {
		const userId = getCookie('id');
		if (!userId) {
			window.location.href = '/login';
		} else {
			setIsAuthenticated(true);
		}
	}, []);

	if (!isAuthenticated) {
		return null; 
	}
	
	const handleVibration = (number: number) => {
		setVibration(number)
		updateUser(userData.dice_count, userData.theme, number, language)
	}

	return (
		<div className='profile'>
			<h1 className=' text-4xl font-bold flex justify-center mt-3'>
				{t('Привет')} {userAccount.name}
			</h1>
			<div className='profile-inf mt-4'>
				<div className='information'>
					<h2 className='text-3xl font-bold mb-1'>
						{t('Статистика аккаунта')}:
					</h2>
					<p className=' text-2xl m-1'>
						{t('Персонажей')}: {userCharacters.length}
					</p>
					<p className=' text-2xl m-1'>
						{t('Заклинаний в книге')}: {userBook.length}
					</p>
					<p className=' text-2xl m-1'>
						{t('Брошено костей')}: {userData.dice_count}
					</p>
					<div className='settings_wrapper mt-5'>
						<h2 className='text-3xl font-bold mb-1'>{t('Настройки')}:</h2>
						<div className='lang_wrapper flex gap-4'>
							<p className=' text-2xl m-1'>{t('Язык')}:</p>
							<Select
								value={language}
								options={[
									{ value: 'ru', label: 'Русский' },
									{ value: 'en', label: 'English' },
								]}
								onChange={value => {
									setLanguage(value)
									i18n.changeLanguage(value)
									updateUser(
										userData.dice_count,
										userData.theme,
										userData.vibration,
										value
									)
								}}
							/>
						</div>
						{currentDevice !== device.desktop() ? (
							''
						) : (
							<div className='vibration_wrapper flex gap-4 items-center'>
								<p className=' text-2xl m-1'>{t('Вибрация')}:</p>
								<Switch
									checked={vibration == 0 ? false : true}
									onChange={() => {
										handleVibration(vibration === 30 ? 0 : 30)
									}}
								/>
							</div>
						)}
					</div>
				</div>
				<div className='wrap'>
					<table className='table-head'>
						<tr>
							<td scope='col'>Имя</td>
							<td scope='col'>Раса</td>
							<td scope='col'>Класс</td>
							<td scope='col'>Уровень</td>
							<td scope='col'>Дата создания</td>
						</tr>
					</table>
					<div className='table-body-wrapper'>
						<table className='table-body'>
							{userCharacters.length !== 0 ? (
								userCharacters.map(character => (
									<tr key={character.id}>
										<td scope='col' className='border-2 border-black'>
											{character.name}
										</td>
										<td scope='col' className='border-2 border-black'>
											{character.race}
										</td>
										<td scope='col' className='border-2 border-black'>
											{character.class}
										</td>
										<td scope='col' className='border-2 border-black'>
											{character.level}
										</td>
										<td scope='col' className='border-2 border-black'>
											{new Date(character.create_date).toLocaleDateString()}
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={5}>У вас нету персонажей</td>
								</tr>
							)}
						</table>
					</div>
				</div>
			</div>
			{currentDevice == 'desktop' ? <GetOutDesktop /> : <GetOutMobile />}
		</div>
	)
}

export default Profile
