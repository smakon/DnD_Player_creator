import { races_list } from '../../functions/dnd_info'
import { useState, useEffect } from 'react'

const RaceSelect = () => {
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
	}, [])

	return (
		<>
         <select>
            {races.map(race => (
               <option key={race.index} value={race.url}>
                  {race.name}
               </option>
            ))}
         </select>
		</>
	)
}

export default RaceSelect
