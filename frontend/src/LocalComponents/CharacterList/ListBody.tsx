import { useState, useEffect } from 'react'
import { ModifyComponent } from './components/modifyComponent'
import { updateCharacterModify } from '../../functions/characters'
import { useNavigate } from 'react-router-dom'

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
}
const ListBody = ({ skills, modify, skill_id }: ListBodyProps) => {
	const [charisma, setCharisma] = useState<number>(0)
	const [dexterity, setDexterity] = useState<number>(0)
	const [intelligence, setIntelligence] = useState<number>(0)
	const [physique, setPhysique] = useState<number>(0)
	const [strength, setStrength] = useState<number>(0)
	const [wisdom, setWisdom] = useState<number>(0)
	const navigate = useNavigate()
	useEffect(() => {
		setCharisma(modify.Charisma)
		setDexterity(modify.Dexterity)
		setIntelligence(modify.Intelligence)
		setPhysique(modify.Physique)
		setStrength(modify.Strength)
		setWisdom(modify.Wisdom)
	}, [modify])

	useEffect(() => {
		if (skill_id === 0 && skills) {
			navigate('/characterError')
		}
	}, [skill_id])

   useEffect(() => {
      if (modify.id !== 0) {
         updateCharacterModify(modify.id, strength, dexterity, physique, intelligence, wisdom, charisma)
      }
      }, [charisma, dexterity, intelligence, physique, strength, wisdom])

	const mods = [
		['Wisdom', wisdom],
		['Charisma', charisma],
		['Intelligence', intelligence],
		
		['Strength', strength],
		['Dexterity', dexterity],
		['Physique', physique],
	]


	return (
		<div className='list_body'>
			<div className='main'>
				<div className='modify__wrapper'>
					{mods.map(mod => {
						const modifyName = String(mod[0])
						const modify = Number(mod[1])

						return (
							<ModifyComponent
								modifyName={modifyName}
								modify={modify}
								setter={
									modifyName === 'Charisma'
										? setCharisma
										: modifyName === 'Dexterity'
										? setDexterity
										: modifyName === 'Intelligence'
										? setIntelligence
										: modifyName === 'Strength'
										? setStrength
										: modifyName === 'Wisdom'
										? setWisdom
										: modifyName === 'Physique'
										? setPhysique
										: setCharisma
								}
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
