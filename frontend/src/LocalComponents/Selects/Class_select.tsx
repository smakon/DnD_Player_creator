import { updateCharacter } from '../../functions/characters'
import { classes_list } from '../../functions/dnd_info'
import { useState, useEffect} from 'react'

export interface selectProps {
	getter: string
	setter: (value: string) => void
	character_id: number
	exp: number
	name: string
	hp: string
}

interface classSelectProps extends selectProps{
	race: string
}
const ClassSelect = ({ getter, setter, character_id, race, exp, name, hp }: classSelectProps) =>{
	const [classes, setClasses] = useState([
		{
			name: '',
			url: '',
			index: '',
		},
	])
	useEffect(() => {
		classes_list()
			.then(classes => {
				setClasses(classes.data.results)
			})
			.catch(err => console.error(err))
	}, [getter])
	
	return (
		<select
			value={getter}
			onChange={e => {
				setter(e.target.value)
				updateCharacter(character_id, exp, race, e.target.value, name, hp)
			}}
		>
			{classes.map(cls => (
				<option key={cls.index} value={cls.index}>
					{cls.name}
				</option>
			))}
		</select>
	)
}

export default ClassSelect
