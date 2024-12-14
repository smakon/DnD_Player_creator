import { createNotify } from '../../../functions/notify'
import { ToastContainer } from 'react-toastify'
import { d20 } from '../dice'

interface SkillComponentProps {
	skillName: string
	bonus: number
	state: number
	mod: number

	setBonus: (value: number) => void
	setState: (value: number) => void
}
const SkillComponent = ({
	skillName,
	bonus,
	state,
	setBonus,
	setState,
	mod,
}: SkillComponentProps) => {
	const handleChange = (value: number, setter: (value: number) => void) => {
		setter(value)
	}

	const indicate = () => {
		return state * mod + bonus
   }
   
	return (
		<div className='skill'>
			<div className='skill_info'>
				<h1>{skillName}</h1>
				<div 
					className='indicator'
					onClick={() => {
						const dice20 = d20()
						createNotify({
							appearance: 'success',
							message: `${skillName}: ${dice20} + ${indicate()} = ${
								dice20 + indicate()
							}`,
							theme: 1,
							position: 'bottom-left',
						})
					}}
				>
					+{indicate()}
				</div>
			</div>
			<div className='second_info'>
				<div>
					Bonus:
					<input
						type='number'
						value={bonus}
						min={0}
						max={11}
						onChange={e => handleChange(Number(e.target.value), setBonus)}
					/>
				</div>
				<div>
					Knowledge:{' '}
					<input
						type='number'
						value={state}
						min={0}
						max={3}
						onChange={e => handleChange(Number(e.target.value), setState)}
					/>
				</div>
			</div>
			<ToastContainer />
		</div>
	)
}

export default SkillComponent
