import { useRef, useEffect } from 'react'
import { updateCharacterSecondaryInfo } from '../../functions/characters'

interface characterSettings {
	name: string
	speed: number
	armor: number
	maxHp: number
	secondaryInfo_id: number
	setName: (name: string) => void
	setSpeed: (speed: number) => void
	setArmor: (armor: number) => void
	setMaxHp: (macHp: number) => void
	onClose: () => void
}
const CharacterSettings = ({
	name,
	speed,
	armor,
	maxHp,
	setArmor,
	setName,
	setSpeed,
	onClose,
	setMaxHp,
	secondaryInfo_id,
}: characterSettings) => {
	const modalRef = useRef<HTMLDivElement>(null)

	const handleChangeName = (value: string) => setName(value == '' ? 'Untitled' : value)
	const handleChangeNum = (value: string, setter: (val: number) => void) =>
		setter(Number(value))

	console.log(name)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [onClose])

	useEffect(() => {
		updateCharacterSecondaryInfo(secondaryInfo_id, armor, speed)
	}, [speed, armor])

	return (
      <div className='mod' ref={modalRef}>
         <div className='character_settings'>
            <h1>Настройки</h1>
				<input
					type='text'
					defaultValue={name}
					onChange={e => handleChangeName(e.target.value)}
				/>
				<p>Имя</p>
				<input
					type='text'
					defaultValue={speed}
					onChange={e => handleChangeNum(e.target.value, setSpeed)}
				/>
				<p>Скорость</p>
				<input
					type='text'
					defaultValue={armor}
					onChange={e => handleChangeNum(e.target.value, setArmor)}
				/>
				<p>Броня</p>
				<input
					type='text'
					defaultValue={maxHp}
					onChange={e => handleChangeNum(e.target.value, setMaxHp)}
				/>
				<p>Максимум хитов</p>
			</div>
		</div>
	)
}

export default CharacterSettings
