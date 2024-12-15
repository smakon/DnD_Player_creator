import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../../Scss/CharacterList/characterList.css'
import ListHead from './ListHead'
import { getCharacterModify, getCharacterSkills } from '../../functions/characters'
import ListBody from './ListBody'

interface CharacterProps {
	vibration: number
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
	userData: {
		user_id: number | string
		theme: number | string
		vibration: number | string
		language: string
		dice_count: number | string
	}
}
const CharacterList = ({ userCharacters, vibration, userData }: CharacterProps) => {
	let { id } = useParams()
	const ID = Number(id)
	const [skills, setSkills] = useState('')
	const [modify, setModify] = useState({
		Charisma: 0,
		Dexterity: 0,
		Intelligence: 0,
		Physique: 0,
		Strength: 0,
		Wisdom: 0,
		id: 0,
	})
	const [characterInfo, setCharacterInfo] = useState({
		id: 0,
		character_id: ID,
		character_secondary_info_id: 0,
		character_money_id: 0,
		character_modify_id: 0,
		character_skills_id: 0,
	
	})
	useEffect(() => {
		if (characterInfo.character_skills_id !== 0) {
			getCharacterSkills(characterInfo.character_skills_id)
				.then(skills => {
					const data = skills.data[0].skills
					setSkills(data)
				})
			getCharacterModify(characterInfo.character_modify_id).then(modify => { 
				setModify(modify.data[0])
			})
		}
	}, [characterInfo])

	return (
		<div className="characterList">
			<ListHead
				ID={ID}
				userCharacters={userCharacters}
				characterInfo={characterInfo}
				setCharacterInfo={setCharacterInfo} />
			<ListBody
				userData={userData}
				vibration={vibration}
				skills={skills}
				modify={modify}
				skill_id={characterInfo.character_skills_id}
			/>
		</div>
	)
}

export default CharacterList
