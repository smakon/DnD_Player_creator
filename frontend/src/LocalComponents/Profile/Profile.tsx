import { getCookie } from '../../functions/cookies';
import { Select, Switch } from 'antd'
import i18n from '../../i18n'

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
		language: number | string
		dice_count: number | string
	}
	userCharacters: object[]
	userBook: object[]
	language: string
	setLanguage: (value: string) => void
	t: (value: string) => string
}

const Profile = ({ userAccount, userData, userCharacters, userBook, language, setLanguage, t }: ProfileProps) => {
	if (getCookie('id') == null) {
		document.location.href = '/login'
		return null
	}

	return (
		<div className='profile'>
			// TODO: Заполнить страницу всякой информацией
			<h1 className=' text-2xl font-bold flex justify-center'>
				{t('Привет')} {userAccount.name}
			</h1>
			<p>
				{t('Персонажей')}: {userCharacters.length}
			</p>
			<p>
				{t('Заклинаний в книге')}: {userBook.length}
			</p>
			<p>
				{t('Брошено костей')}: {userData.dice_count}
			</p>
			<div className='lang_wrapper flex gap-4'>
				<p>{t('Язык')}:</p>
				<Select
					defaultValue={language}
					options={[
						{ value: 'ru', label: 'Русский' },
						{ value: 'en', label: 'English' },
					]}
					onChange={value => {
						setLanguage(value)
						i18n.changeLanguage(value)
					}}
				/>
			</div>
			<div className='vibration_wrapper flex gap-4'>
				<p>{t('Вибрация')}:</p>
				<Switch
					defaultChecked
					onChange={() => {
						// Vibration(getVibrations == 0 ? 10 : 0)
						
					}}
				/>
			</div>
		</div>
	)
}

export default Profile;
