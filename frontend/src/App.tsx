import Home from './LocalComponents/Home/Home'
import Registration from './LocalComponents/Registration/Registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './LocalComponents/Header'
import Login from './LocalComponents/Login/Login'
import Profile from './LocalComponents/Profile/Profile'
import { getUser, getUserBook, getUserCharacters, getUserData } from './functions/user'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'
import ResetPassword from './LocalComponents/ResetPass/ResetPassword'



function App() {
	const [userAccount, setUserAccount] = useState({
		id: '',
		name: '',
		password: '',
	})
	const [userData, setUserData] = useState({
		user_id: '',
		theme: '',
		vibration: '',
		language: '',
		dice_count: '',
	})
	const [userCharacters, setUserCharacters] = useState([{}])
	const [userBook, setUserBook] = useState([{}])
	const [language, setLanguage] = useState('ru')
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
		fetchUserAccount()
		fetchUserData()
		fetchUserCharacters()
		fetchUserBook()
		i18n.changeLanguage('ru')
	}, [])
	console.log(userBook)
	console.log(typeof(userBook))
	return (
		<BrowserRouter>
			<Header userAccount={userAccount} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='forgotPassword' element={<ResetPassword/>} />
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
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
