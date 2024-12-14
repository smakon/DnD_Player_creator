import { useState } from 'react'
import { CalculatorMoney } from '../calculator/CalculatorMoney'
import MoneyCalcHeader from './moneyCalcHeader'

interface moneyProps {
	money_in_gold: number
	gold: number
	silver: number
	copper: number
	platinum: number
	electrum: number
	setGold: (value: number) => void
	setSilver: (value: number) => void
	setCopper: (value: number) => void
	setPlatinum: (value: number) => void
	setElectrum: (value: number) => void
}

const Money = ({
	money_in_gold,
	gold,
	silver,
	copper,
	platinum,
	electrum,
	setGold,
	setSilver,
	setCopper,
	setElectrum,
	setPlatinum,
}: moneyProps) => {
	const [showCalculator, setShowCalculator] = useState(false)

   return (
			<div className='money_wrapper' onClick={() => setShowCalculator(true)}>
				<div className='gold_coin'>
					<div className='goldLine'></div>
					<div className='goldLine'></div>
				</div>
				<div className='money_count'>
					<p>{money_in_gold.toFixed(2)}</p>
				</div>
				{showCalculator && (
					<div className='modal'>
						<div className='modal-content'>
							<CalculatorMoney
								getter={{ gold, silver, copper, platinum, electrum }}
								setter={{
									setGold,
									setSilver,
									setCopper,
									setPlatinum,
									setElectrum,
								}}
								onClose={() => setShowCalculator(false)}
							>
								<MoneyCalcHeader
									money_in_gold={money_in_gold}
									gold={gold}
									copper={copper}
									silver={silver}
									electrum={electrum}
									platinum={platinum}
								/>
							</CalculatorMoney>
						</div>
					</div>
				)}
			</div>
		)
}

export default Money
