import { createNotify } from '../../../functions/notify'
import { ToastContainer } from 'react-toastify'
import { d20 } from '../dice'
import { updateUser } from '../../../functions/user'

interface SkillComponentProps {
	skillName: string
	bonus: number
	state: number
	mod: number

	setBonus: (value: number) => void
	setState: (value: number) => void

	userData: {
		user_id: number | string
		theme: number | string
		vibration: number | string
		language: string
		dice_count: number | string
	}
	exp: number
}
const SkillComponent = ({
	skillName,
	bonus,
	state,
	setBonus,
	setState,
	mod,
	userData,
	exp
}: SkillComponentProps) => {
	const handleChange = (value: number, setter: (value: number) => void) => {
		setter(value)
	}
	const levels: Record<string, number> = {
		'1': 0,
		'2': 300,
		'3': 900,
		'4': 2700,
		'5': 6500,
		'6': 14000,
		'7': 23000,
		'8': 34000,
		'9': 48000,
		'10': 64000,
		'11': 85000,
		'12': 100000,
		'13': 120000,
		'14': 140000,
		'15': 165000,
		'16': 195000,
		'17': 225000,
		'18': 265000,
		'19': 305000,
		'20': 355000,
	}
	
	const currentLevel = Object.keys(levels).reduce((acc, level) => {
		return exp >= levels[level] ? level : acc
	}, '1')

	const indicate = () => {
		const bonus2 = Math.floor((Number(currentLevel) - 1) / 4) + 2
		return state * bonus2 + mod + bonus
   }
   
	return (
		<div className='skill'>
			<div className='skill_info'>
				<h1>{skillName}</h1>
				<div 
					className='indicator'
					onClick={() => {
						const dice20 = d20()
						navigator.vibrate(Number(userData.vibration))
						updateUser(
							Number(userData.dice_count) + 1,
							userData.theme,
							Number(userData.vibration),
							userData.language
						)
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
					{indicate()}
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
