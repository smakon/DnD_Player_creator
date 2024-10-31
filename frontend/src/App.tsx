import Home from './LocalComponents/Home/Home'
import Registration from './LocalComponents/Registration/Registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './LocalComponents/Header'
import Login from './LocalComponents/Login/Login'
import Profile from './LocalComponents/Profile/Profile'
import { getUser } from './functions/user'
import { useState, useEffect } from 'react'





function App() {
	const [userData, setUserData] = useState({ id: '0', name: '', password: '' })

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const res = await getUser()
				setUserData(res.data[0])	
			} catch (error) {
				console.error(error)
			}
		}
		fetchUserData()
	}, [])
	return (
		<BrowserRouter>
			<Header userData={userData}/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='profile' element={<Profile userData={userData}/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
