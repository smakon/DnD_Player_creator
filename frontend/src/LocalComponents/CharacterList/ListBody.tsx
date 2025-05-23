import { useState, useEffect } from 'react'
import { ModifyComponent } from './components/modifyComponent'
import { updateCharacterModify } from '../../functions/characters'

interface ListBodyProps {
	skill_id: number
	skills: string
	modify: {
		Charisma: number
		Dexterity: number
		Intelligence: number
		Physique: number
		Strength: number
		Wisdom: number
		id: number
	}
	userData: {
		user_id: number | string
		theme: number | string
		vibration: number | string
		language: string
		dice_count: number | string
	}
	exp: number
}

const ListBody = ({ skills, modify, skill_id, userData, exp }: ListBodyProps) => {
	const [charisma, setCharisma] = useState<number>(0)
	const [dexterity, setDexterity] = useState<number>(0)
	const [intelligence, setIntelligence] = useState<number>(0)
	const [physique, setPhysique] = useState<number>(0)
	const [strength, setStrength] = useState<number>(0)
	const [wisdom, setWisdom] = useState<number>(0)
	useEffect(() => {
		setCharisma(modify.Charisma)
		setDexterity(modify.Dexterity)
		setIntelligence(modify.Intelligence)
		setPhysique(modify.Physique)
		setStrength(modify.Strength)
		setWisdom(modify.Wisdom)
	}, [modify])

	useEffect(() => {
		if (modify.id !== 0) {
			updateCharacterModify(
				modify.id,
				strength,
				dexterity,
				physique,
				intelligence,
				wisdom,
				charisma
			)
		}
	}, [charisma, dexterity, intelligence, physique, strength, wisdom, modify.id])

	const mods = [
		['Wisdom', wisdom],
		['Charisma', charisma],
		['Intelligence', intelligence],
		['Strength', strength],
		['Dexterity', dexterity],
		['Physique', physique],
	]

	const getSetter = (name: string) => {
		switch (name) {
			case 'Charisma':
				return setCharisma
			case 'Dexterity':
				return setDexterity
			case 'Intelligence':
				return setIntelligence
			case 'Strength':
				return setStrength
			case 'Wisdom':
				return setWisdom
			case 'Physique':
				return setPhysique
			default:
				return setCharisma
		}
	}

	return (
		<div className='list_body'>
			<div className='main'>
				<div className='modify__wrapper'>
					{mods.map(mod => {
						const modifyName = String(mod[0])
						const modifyValue = Number(mod[1])
						const setter = getSetter(modifyName)

						return (
							<ModifyComponent
								exp={exp}
								userData={userData}
								key={modifyName}
								modifyName={modifyName}
								modify={modifyValue}
								setter={setter}
								skills={skills}
								skill_id={skill_id}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default ListBody
