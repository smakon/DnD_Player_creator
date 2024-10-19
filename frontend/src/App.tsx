import Home from './LocalComponents/Home/Home'
import Registration from './LocalComponents/Registration/Registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './LocalComponents/Header'




function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='registration' element={<Registration />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
