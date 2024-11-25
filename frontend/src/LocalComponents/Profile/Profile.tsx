import { getCookie } from '../../functions/cookies'
import { Select, Switch } from 'antd'
import i18n from '../../i18n'
import '../../Scss/Profile/Profile.css'
import { updateUser } from '../../functions/user'
import { useEffect } from 'react'

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
	userCharacters: object[]
	userBook: object[]
	language: string
	setLanguage: (value: string) => void
	t: (value: string) => string
	setVibration: (value: number) => void
	vibration: number
	currentDevice: object
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
	useEffect(() => {
		if (getCookie('id') == null) {
			window.location.href = '/login'
		}
	}, [])

	const handleVibration = (number: number) => {
		setVibration(number)
		updateUser(userData.dice_count, userData.theme, number, language)
	}

	return (
		<div className='profile mt-4'>
			<h1 className=' text-2xl font-bold flex justify-center'>
				{t('Привет')} {userAccount.name}
			</h1>
			<div className='information'>
				<h2 className='text-2xl font-bold mb-1'>
					{t('Информация вашего аккаунта')}:
				</h2>
				<p className=' text-xl m-1'>
					{t('Персонажей')}: {userCharacters.length}
				</p>
				<p className=' text-xl m-1'>
					{t('Заклинаний в книге')}: {userBook.length}
				</p>
				<p className=' text-xl m-1'>
					{t('Брошено костей')}: {userData.dice_count}
				</p>
				<div className='settings_wrapper mt-5'>
					<h2 className='text-2xl font-bold mb-1'>{t('Настройки')}:</h2>
					<div className='lang_wrapper flex gap-4'>
						<p className=' text-xl m-1'>{t('Язык')}:</p>
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
					{currentDevice ? (
						''
					) : (
						<div className='vibration_wrapper flex gap-4 items-center'>
							<p className=' text-xl m-1'>{t('Вибрация')}:</p>
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
		</div>
	)
}

export default Profile
