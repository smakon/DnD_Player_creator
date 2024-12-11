import Home from './LocalComponents/Home/Home'
import Registration from './LocalComponents/Registration/Registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './LocalComponents/Header'
import Login from './LocalComponents/Login/Login'
import Profile from './LocalComponents/Profile/Profile'
import {
	getUser,
	getUserBook,
	getUserCharacters,
	getUserData,
} from './functions/user'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'
import ResetPassword from './LocalComponents/ResetPass/ResetPassword'
import CharacterList from './LocalComponents/CharacterList/Character_list'
import CharacterError from './LocalComponents/Error/CharacterError'

const device = require('current-device').default

function App() {
	const [currentDevice, setDevice] = useState('desktop')

	const [userAccount, setUserAccount] = useState({
		id: '',
		name: '',
		password: '',
	})
	const [userData, setUserData] = useState({
		user_id: 0,
		theme: 0,
		vibration: 0,
		language: 'ru',
		dice_count: 0,
	})
	const [userCharacters, setUserCharacters] = useState<
		{
			id: number
			user_id: number
			name: string
			class: string
			race: string
			level: number
			hp: string
			created_at: string
		}[]
	>([])
	const [userBook, setUserBook] = useState([{}])
	const [language, setLanguage] = useState('ru')
	const [vibration, setVibration] = useState(0)
	const [theme, setTheme] = useState(0)
	const { t } = useTranslation()

	const fetchUserAccount = async () => {
		try {
			const res = await getUser()
			setUserAccount(res.data[0])
		} catch (error) {
			console.error(error)
		}
	}
	const fetchUserData = async () => {
		try {
			const res = await getUserData()
			setUserData(res.data[0])
		} catch (error) {
			console.error(error)
		}
	}
	const fetchUserCharacters = async () => {
		try {
			const res = await getUserCharacters()
			setUserCharacters(res.data)
		} catch (error) {
			console.error(error)
		}
	}
	const fetchUserBook = async () => {
		try {
			const res = await getUserBook()
			setUserBook(res.data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		setDevice(device.type)
		fetchUserAccount()
		fetchUserData()
		fetchUserCharacters()
		fetchUserBook()
	}, [])
	useEffect(() => {
		try {
			setLanguage(userData.language)
			setVibration(userData.vibration)
			setTheme(userData.theme)
			i18n.changeLanguage(userData.language)
		} catch (userData) {
			setLanguage('ru')
			setVibration(30)
			setTheme(0)
			i18n.changeLanguage('ru')
		}
	}, [userData])

	return (
		<BrowserRouter>
			<Header
				userAccount={userAccount}
				setTheme={setTheme}
				theme={theme}
				userData={userData}
				language={language}
				vibration={vibration}
			/>
			<Routes>
				<Route path='/' element={<Home currentDevice={currentDevice} />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='forgotPassword' element={<ResetPassword />} />
				<Route
					path='character/:id'
					element={<CharacterList userCharacters={userCharacters} />}
				/>
				<Route
					path='profile'
					element={
						<Profile
							setLanguage={setLanguage}
							t={t}
							language={language}
							userAccount={userAccount}
							userData={userData}
							userCharacters={userCharacters}
							userBook={userBook}
							currentDevice={currentDevice}
							setVibration={setVibration}
							vibration={vibration}
						/>
					}
				/>
				<Route path='/characterError' element={<CharacterError />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
