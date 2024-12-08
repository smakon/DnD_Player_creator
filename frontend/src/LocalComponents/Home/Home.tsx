import { Footer } from "../Footer"

export interface HomeProps {
	currentDevice: string

}
function Home({ currentDevice }: HomeProps) {
	
	return (
		<>
			<Footer currentDevice={currentDevice} />
		</>
	)
}

export default Home
