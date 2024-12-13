import { races_list } from '../../functions/dnd_info'
import { useState, useEffect } from 'react'
import { selectProps } from './Class_select'
import { updateCharacter } from '../../functions/characters'

interface RaceSelect extends selectProps{
	c_class: string;
}
const RaceSelect = ({
	getter,
	setter,
	character_id,
	c_class,
	exp,
	name,
	hp,
}: RaceSelect) => {
	const [races, setRaces] = useState([
		{
			name: '',
			url: '',
			index: '',
		},
	])

	useEffect(() => {
		races_list()
			.then(races => {
				console.log(races.data.results)
				setRaces(races.data.results)
			})
			.catch(err => console.error(err))
	}, [getter])

	return (
		<>
			<select
				value={getter}
				onChange={e => {
					setter(e.target.value)
					updateCharacter(character_id, exp, e.target.value, c_class, name, hp)
				}}
			>
				{races.map(race => (
					<option key={race.index} value={race.index}>
						{race.name}
					</option>
				))}
			</select>
		</>
	)
}

export default RaceSelect
