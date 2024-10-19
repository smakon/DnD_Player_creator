import Home from './LocalComponents/Home/Home'
import Registration from './LocalComponents/Registration/Registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './LocalComponents/Header'
import { Footer } from './LocalComponents/Footer'



function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='registration' element={<Registration />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
