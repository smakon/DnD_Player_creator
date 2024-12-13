import { useState, useRef, useEffect } from 'react'
import './clac.css'
import { BackwardOutlined } from '@ant-design/icons'

interface moneyCalculatorProps {
	setter: {
		setGold: (value: number) => void
		setSilver: (value: number) => void
		setCopper: (value: number) => void
		setPlatinum: (value: number) => void
		setElectrum: (value: number) => void
	}
	getter: {
		gold: number
		silver: number
		copper: number
		platinum: number
		electrum: number
	}
	onClose: () => void
	children?: React.ReactNode
}

export const CalculatorMoney = ({
	getter,
	setter,
	onClose,
	children = undefined,
}: moneyCalculatorProps) => {
	const [input, setInput] = useState('')
	const modalRef = useRef<HTMLDivElement>(null)
	const [coin, setCoin] = useState('g')

	const handleInput = (value: string) => {
		if (
			(value === '+' || value === '-') &&
			(input.endsWith('+') || input.endsWith('-'))
		) {
			return // Не добавлять, если последний символ уже знак
		}
		setInput(input + value)
	}

	const calculateResult = (op: string) => {
		if (!input) return 0

		try {
			let result = eval(input)
			setInput('')

			switch (coin) {
				case 'g':
					setter.setGold(eval(`${getter.gold} ${op} ${result}`))
					break
				case 's':
					setter.setSilver(eval(`${getter.silver} ${op} ${result}`))
					break
				case 'c':
					setter.setCopper(eval(`${getter.copper} ${op} ${result}`))
					break
				case 'p':
					setter.setPlatinum(eval(`${getter.platinum} ${op} ${result}`))
					break
				case 'e':
					setter.setElectrum(eval(`${getter.electrum} ${op} ${result}`))
					break
				default:
					return 0
			}
		} catch (error) {
			alert('Ошибка в вычислении')
			return 0
		}
	}

	const clearInput = () => {
		setInput(input.slice(0, -1))
	}

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

	return (
		<div className='mod' ref={modalRef}>
			{children}
			<div className='all'>
				<div className='buttons'>
					<div className='input__wrapper'>
						<label className='label'>
							<div className={`coin-${coin}`}>
								<p>{coin}</p>
							</div>
							<select
								value={coin}
								onChange={target => setCoin(target.target.value)}
							>
								<option value='g'>Золото</option>
								<option value='s'>Серебро</option>
								<option value='c'>Медь</option>
								<option value='p'>Платина</option>
								<option value='e'>Электрум</option>
							</select>
						</label>
						<input type='text' value={input} readOnly />
						<button className='special-button' onClick={clearInput}>
							<BackwardOutlined />
						</button>
					</div>
					<div className='button-row'>
						<button onClick={() => handleInput('7')}>7</button>
						<button onClick={() => handleInput('8')}>8</button>
						<button onClick={() => handleInput('9')}>9</button>
					</div>
					<div className='button-row'>
						<button onClick={() => handleInput('4')}>4</button>
						<button onClick={() => handleInput('5')}>5</button>
						<button onClick={() => handleInput('6')}>6</button>
					</div>
					<div className='button-row'>
						<button onClick={() => handleInput('1')}>1</button>
						<button onClick={() => handleInput('2')}>2</button>
						<button onClick={() => handleInput('3')}>3</button>
					</div>
					<div className='button-row'>
						<button onClick={() => handleInput('0')}>0</button>
						<button onClick={() => handleInput('+')}>+</button>
						<button onClick={() => handleInput('-')}>-</button>
					</div>
					<div className='button-row'>
						<button onClick={() => calculateResult('+')}>ПРИБАВИТЬ</button>
						<button
							onClick={() => {
								calculateResult('-')
							}}
						>
							ОТНЯТЬ
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
