interface miniLevelBarProps {
	exp: number
	currentLevel: number
	startExp: number
	endExp: number
	percent: number
}
const MiniLevelBar = ({
	exp,
	currentLevel,
	startExp,
	endExp,
	percent,
}: miniLevelBarProps) => {
	const progress = {
		'--progress': `${percent}%`,
	} as React.CSSProperties

	return (
		<div className='miniLevelBar'>
			<div className='left'>
				<div className='currentLevelMini'>{currentLevel}</div>
				<div className='startExp'>{startExp}</div>
			</div>
			<div className='line_wrapper'>
				<div className='expLineMini' style={progress}>
					<p style={progress}>{exp}</p>
				</div>
				<div className='lineMini' style={progress}></div>
			</div>
			<div className='right'>
				<div className='nextLevel'>{currentLevel + 1}</div>
				<div className='endExp'>{endExp}</div>
			</div>
		</div>
	)
}

export default MiniLevelBar
