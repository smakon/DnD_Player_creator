import React, { useState } from 'react'
import { Calculator } from '../calculator/Calculator'
import MiniLevelBar from './MiniLevelBar'

interface levelBarProps {
	exp: number
	setExp: (value: number) => void
}

export const LevelBar = ({ exp, setExp }: levelBarProps) => {
	const [showCalculator, setShowCalculator] = useState(false)

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

	const nextLevelExp = levels[Number(currentLevel) + 1]
	const currentLevelExp = levels[currentLevel]
	const progressPercentage =
		((exp - currentLevelExp) / (nextLevelExp - currentLevelExp)) * 100

	return (
		<div className='levelBar' onClick={() => setShowCalculator(true)}>
			<div className='currentLevel'>
				<p>{currentLevel} УРОВЕНЬ</p>
			</div>
			<div
				className='line'
				style={
					{ '--progress': `${progressPercentage}%` } as React.CSSProperties
				}
			>
				<div className='experience'>
					{exp}/{nextLevelExp}
					<div className='nextLevel'>{parseInt(currentLevel) + 1}</div>
				</div>
			</div>
			{showCalculator && (
				<div className='modal'>
					<div className='modal-content'>
						<Calculator
							getter={exp}
							setter={setExp}
							onClose={() => setShowCalculator(false)}
						>
							<MiniLevelBar
								percent={progressPercentage}
								exp={exp}
								currentLevel={Number(currentLevel)}
								startExp={currentLevelExp}
								endExp={nextLevelExp}
							/>
						</Calculator>
					</div>
				</div>
			)}
		</div>
	)
}
