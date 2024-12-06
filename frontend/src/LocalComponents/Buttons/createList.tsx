import { object } from "prop-types"
import { createCharacter, getUserCharacters } from "../../functions/user"
import { allCharacters } from "../../functions/unsorted"



const CreateList = () => {
	const createList = () => {
		createCharacter()
		allCharacters().then((character) => {
			const data = character.data
			
			if (data.length != 0) {
				window.location.href = `/character/${data[0].id+1}`
			}
			else {
				window.location.href = '/character/1'
			}
		}).catch((error) => { 
			console.error('Ошибка при получении персонажа:', error)
		})
		
   }

   return (
			<button className='create__list' onClick={() => createList()}>
				<span>
					<svg
						height='24'
						width='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M0 0h24v24H0z' fill='none'></path>
						<path
							d='M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z'
							fill='currentColor'
						></path>
					</svg>
					Create
				</span>
			</button>
		)
}

export default CreateList;
