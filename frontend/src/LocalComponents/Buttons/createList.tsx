import { createCharacter } from "../../functions/user"

export interface createListProps {
	userCharacters: {
		id: number
		user_id: number
		name: string
		class: string
		race: string
		create_date: string
		level: number
		created_at: string
	}[]
}

const CreateList = ({ userCharacters }: createListProps) => {
	const createList = () => {
		createCharacter()
		window.location.reload()
		window.location.href = `/character/${userCharacters[0].id+1}`
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
