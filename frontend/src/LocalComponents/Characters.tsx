import { Footer } from './Footer'
import '../Scss/Characters/Characters.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getUserCharacters } from '../functions/user'
export interface HomeProps {
	currentDevice: string
	setUserCharacters: (
		character: {
			id: number
			user_id: number
			name: string
			class: string
			race: string
			level: number
			hp: string
			create_date: string
		}[]
	) => void
	userCharacters: Array<{
		id: number
		user_id: number
		name: string
		class: string
		race: string
		level: number
		hp: string
		create_date: string
	}>
}
function Characters({ currentDevice, userCharacters, setUserCharacters }: HomeProps) {
	const navigate = useNavigate()

	const fetchUserCharacters = async () => {
		try {
			const res = await getUserCharacters()
			setUserCharacters(res.data)
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		fetchUserCharacters()
	}, [])
	return (
		<>
			<div className='characters'>
				{userCharacters.map(character => (
					<div
						key={character.id}
						className='character card'
						onClick={() => navigate(`/character/${character.id}`)}
					>
						<img
							src={`${process.env.PUBLIC_URL}/races/${character.race}.png`}
							alt='race'
						/>
						<h2>{character.name}</h2>
						<p>Race: {character.race}</p>
						<p>Class: {character.class}</p>
						<p>Level: {character.level}</p>
					</div>
				))}
			</div>
			<Footer currentDevice={currentDevice} />
		</>
	)
}

export default Characters
