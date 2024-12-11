import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LevelBar } from './LevelBar'
import '../../Scss/CharacterList/characterList.css'
import { updateCharacter } from '../../functions/characters'
import { useNavigate } from 'react-router-dom'

interface CharacterProps {
	userCharacters: Array<{
		id: number
		user_id: number
		name: string
		class: string
		race: string
		level: number
		hp: string
		created_at: string
	}>
}
const CharacterList = ({ userCharacters }: CharacterProps) => {
	let { id } = useParams()
	const [exp, setExp] = useState(0)
	const [race, setRace] = useState('')
	const [getClass, setClass] = useState('')
	const [name, setName] = useState('')

	// TODO: Заполнить
	const ID = Number(id)
	const character = userCharacters.find(c => c.id === ID)
	
	const navigate = useNavigate()

	useEffect(() => {
		setClass(String(character?.class))
		setName(String(character?.name))
		setRace(String(character?.race))
		setExp(Number(character?.level))
		
		if (!character && userCharacters.length > 0) {
			navigate('/characterError')
		}
	}, [character, userCharacters])
	
	useEffect(() => {
		if (race !== '' || getClass !== '') {
			updateCharacter(ID, exp, race, getClass, name)
				.then(res => {
					return true
				})
				.catch(err => {
					return err
				})
		}
		
	}, [exp])
	return (
		<div className='list__head'>
			<img src={`${process.env.PUBLIC_URL}/races/${race}.png`} alt="race" />
			<h1>{name}</h1>
			<h2>Класс: {getClass}</h2>
			<h2>Раса: {race}</h2>
			<LevelBar exp={exp} setExp={setExp} />
		</div>
	)
}

export default CharacterList
