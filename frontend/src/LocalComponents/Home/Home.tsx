import { Footer } from "../Footer"

export interface HomeProps {
	currentDevice: object
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
}
function Home({ currentDevice, userCharacters}: HomeProps) {
	return (
		<>
			<Footer currentDevice={currentDevice} userCharacters={ userCharacters } />
		</>
	)
}

export default Home
