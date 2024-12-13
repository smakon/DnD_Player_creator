import React from 'react'
import '../../Scss/CharacterList/characterList.css'

interface MoneyCalcHeaderProps {
	money_in_gold: number
	gold: number
	silver: number
	copper: number
	platinum: number
	electrum: number
}
const MoneyCalcHeader = ({
	money_in_gold,
	gold,
	silver,
	copper,
	platinum,
	electrum,
}: MoneyCalcHeaderProps) => {
   return (
			<div className='moneyClacHeader'>
				<p>
					Всего в золате: <span>{money_in_gold.toFixed(2)}</span>
				</p>
				<div className='body'>
					<div className='left'>
						<div className='coin'>
							<div className='coin-g'>g</div> {gold}
						</div>
						<div className='coin'>
							<div className='coin-s'>s</div> {silver}
						</div>
						<div className='coin'>
							<div className='coin-c'>c</div> {copper}
						</div>
					</div>
					<div className='right'>
						<div className='coin'>
							<div className='coin-p'>p</div> {platinum}
						</div>
						<div className='coin'>
							<div className='coin-e'>e</div> {electrum}
						</div>
					</div>
				</div>
			</div>
		)
}

export default MoneyCalcHeader
