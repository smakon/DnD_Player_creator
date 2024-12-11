import React, { useState, useEffect, useRef } from 'react'
import './clac.css'
import { BackwardOutlined } from '@ant-design/icons'
import { createNotify } from '../../../functions/notify'

interface calculatorProps {
   setter: (value: number) => void
   getter: number
	onClose: () => void
	children?: React.ReactNode
}
export const Calculator = ({ getter,setter, onClose, children=undefined }: calculatorProps) => {
	const [input, setInput] = useState('')
	const modalRef = useRef<HTMLDivElement>(null)

	const handleInput = (value: string) => {
		if (
			(value === '+' || value === '-') &&
			(input.endsWith('+') || input.endsWith('-'))
		) {
			return // Не добавлять, если последний символ уже знак
		}
		setInput(input + value)
	}

	const calculateResult = () => {
		if (!input) return 0
		
		try {
			const result = eval(input)
			setInput('')

			return result
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
					<div>
						<input type='text' value={input} readOnly />
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
						<button onClick={() => setter(getter + calculateResult())}>
							ПРИБАВИТЬ
						</button>
						<button onClick={() => {
							const result = calculateResult();
							if (getter - result < 0) {
								return
							} else {
								setter(getter - result);
							}
						}}>
							ОТНЯТЬ
						</button>
					</div>
				</div>
				<div className='spec-buttons-w'>
					<button className='special-button' onClick={clearInput}>
						<BackwardOutlined />
					</button>
					<div className='money-box silver'></div>
					<div className='money-box copper'></div>
					<div className='money-box platinum'></div>
					<div className='money-box electrium'></div>
				</div>
			</div>
		</div>
	)
}
