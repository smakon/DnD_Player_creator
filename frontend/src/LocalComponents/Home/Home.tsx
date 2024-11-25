import { Footer } from "../Footer"

export interface HomeProps {
	currentDevice: object
}
function Home({ currentDevice}: HomeProps) {
	return (
		<>
			<p className='className text-red-500'>Hello</p>
         <Footer currentDevice={currentDevice}/>
      </>
	)
}

export default Home
