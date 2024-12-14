import React from 'react'
import ClassSelect from '../Selects/Class_select'
import RaceSelect from '../Selects/Race_select'
import Money from './components/Money'
import CharacterSettings from './components/characterSettings'
import { Calculator } from './calculator/Calculator'
import { HeartFilled } from '@ant-design/icons'
import { LevelBar } from './components/LevelBar'
import { useEffect, useState } from 'react'

import {
	getCharacterInfo,
	getCharacterMoney,
	getCharacterSecondaryInfo,
	updateCharacter,
	updateCharacterMoney,
} from '../../functions/characters'
import { useNavigate } from 'react-router-dom'

type CharacterInfo = {
   id: number;
   character_id: number;
   character_secondary_info_id: number;
   character_money_id: number;
   character_modify_id: number;
   character_skills_id: number;
};
interface ListHeadProps {
	ID: number
	userCharacters: Array<{
		id: number
		user_id: number
		name: string
		class: string
		race: string
		level: number
		hp: string
		created_at: string
	}>

	characterInfo: {
		id: number
		character_id: number
		character_secondary_info_id: number
		character_money_id: number
		character_modify_id: number
		character_skills_id: number
   }
   
   setCharacterInfo: (value: CharacterInfo) => void
}

const ListHead = ({ID, userCharacters, characterInfo, setCharacterInfo}: ListHeadProps) => {
   const [race, setRace] = useState('')
   const [getClass, setClass] = useState('')
   const [exp, setExp] = useState(0)
   const [name, setName] = useState('')
   const [speed, setSpeed] = useState(0)
   const [armor, setArmor] = useState(0)
   const [maxHp, setMaxHp] = useState(0)
   const [currentHp, setCurrentHp] = useState(0)
   const [money_in_gold, setMoneyInGold] = useState(0)
   const [gold, setGold] = useState(0)
   const [silver, setSilver] = useState(0)
   const [copper, setCopper] = useState(0)
   const [platinum, setPlatinum] = useState(0)
   const [electrum, setElectrum] = useState(0)
   const [showSettings, setShowSettings] = useState(false)
   const [showHpClac, setShowHpClac] = useState(false)
   const [character_secondary_info_id, setCharacterSecondaryInfoId] = useState(0)
   const [hpColor, setHPColor] = useState('#669393')
   const [character_money, setCharacterMoney] = useState({
      id: 0,
      golden_coin: 0,
      silver_coin: 0,
      copper_coin: 0,
      platinum_coin: 0,
      electrum_coin: 0,
   })

   const navigate = useNavigate()
   const character = userCharacters.find(c => c.id === ID)
   
   useEffect(() => {
      const fetchCharacterInfo = async () => {
         try {
            // Получаем основную информацию о персонаже
            const characterInfoResponse = await getCharacterInfo(ID)
            setCharacterInfo(characterInfoResponse.data[0])
         } catch (error) {
            console.error('Ошибка при получении данных персонажа:', error)
         }
      }

      if (ID) {
         fetchCharacterInfo()
      }
   }, [ID])

   useEffect(() => {
      const fetchCharacterSecondaryInfo = async () => {
         const secondaryInfoResponse = await getCharacterSecondaryInfo(
            characterInfo.character_secondary_info_id
         )
         setSpeed(secondaryInfoResponse.data[0].speed)
         setArmor(secondaryInfoResponse.data[0].armor)
         setCharacterSecondaryInfoId(secondaryInfoResponse.data[0].id)
      }

      const fetchCharacterMoney = async () => {
         const CharacterMoneyResponse = await getCharacterMoney(
            characterInfo.character_money_id
         )
         setCharacterMoney(CharacterMoneyResponse.data[0])
         setMoneyInGold(
            CharacterMoneyResponse.data[0].golden_coin +
               CharacterMoneyResponse.data[0].silver_coin / 10 +
               CharacterMoneyResponse.data[0].copper_coin / 100 +
               CharacterMoneyResponse.data[0].platinum_coin * 10 +
               CharacterMoneyResponse.data[0].electrum_coin / 2
         )
      }

      if (
         characterInfo.character_secondary_info_id !== 0 &&
         characterInfo.character_money_id !== 0
      ) {
         fetchCharacterSecondaryInfo()
         fetchCharacterMoney()
      }
   }, [characterInfo])

   useEffect(() => {
      if (
         !character &&
         userCharacters.length > 0 &&
         characterInfo.id === 0
      ) {
         navigate('/characterError')
      }
      else {
         setClass(String(character?.class))
         setName(String(character?.name))
         setRace(String(character?.race))
         setExp(Number(character?.level))
         if (character?.hp) {
            const [current, max] = character.hp.split(';').map(Number)
            setCurrentHp(current)
            setMaxHp(max)
         }
      }
   }, [character, userCharacters])

   useEffect(() => {
      if (race !== '' || getClass !== '') {
         const hp = `${currentHp};${maxHp}`
         updateCharacter(ID, exp, race, getClass, name, hp)
            .then(res => {
               return true
            })
            .catch(err => {
               return err
            })
      }

   }, [exp])

   useEffect(() => {
      setGold(character_money.golden_coin)
      setSilver(character_money.silver_coin)
      setCopper(character_money.copper_coin)
      setPlatinum(character_money.platinum_coin)
      setElectrum(character_money.electrum_coin)
   }, [character_money])

   useEffect(() => {
      if (gold < 0) setGold(0)
      else if (silver < 0) setSilver(0)
      else if (copper < 0) setCopper(0)
      else if (platinum < 0) setPlatinum(0)
      else if (electrum < 0) setElectrum(0)
      else {
         setMoneyInGold(
            gold + silver / 10 + copper / 100 + platinum * 10 + electrum / 2
         )

         updateCharacterMoney(
            character_money.id,
            gold,
            platinum,
            silver,
            copper,
            electrum
         )
      }
   }, [gold, silver, platinum, electrum, copper])

   useEffect(() => {
      if (race !== '' || getClass !== '') {
         updateCharacter(ID, exp, race, getClass, name, `${currentHp};${maxHp}`)
      }
   }, [name])

   useEffect(() => {
      const hpPrecent = (currentHp / maxHp) * 100
      if (hpPrecent >= 100 && hpPrecent >= 60) {
         setHPColor('#669393')
      } else if (hpPrecent <= 60 && hpPrecent >= 50) {
         setHPColor('#f7d571')
      } else if (hpPrecent <= 50) {
         setHPColor('#df4b4b')
      }
      
      if (race !== '' || getClass !== '') {
         updateCharacter(ID, exp, race, getClass, name, `${currentHp};${maxHp}`)
      }
   }, [maxHp, currentHp])

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

   let bonus = Math.floor((Number(currentLevel) - 1) / 4) + 2

	return (
		<div className='list__head'>
			<div className='main_information'>
				<img
					src={`${process.env.PUBLIC_URL}/races/${race}.png`}
					alt='race'
					onClick={() => setShowSettings(true)}
				/>
				<div className='main_information_body'>
					<h1>{name}</h1>
					<div className='class_race_wrapper'>
						<div className='class__wrapper'>
							<ClassSelect
								getter={getClass}
								setter={setClass}
								exp={exp}
								race={race}
								character_id={ID}
								name={name}
								hp={`${currentHp};${maxHp}`}
							/>
						</div>
						<p>—</p>
						<div className='race__wrapper'>
							<RaceSelect
								setter={setRace}
								getter={race}
								exp={exp}
								c_class={getClass}
								character_id={ID}
								name={name}
								hp={`${currentHp};${maxHp}`}
							/>
						</div>
					</div>
					<LevelBar exp={exp} setExp={setExp} />
				</div>
			</div>
			<div className='secondary_information'>
				<div className='armor_wrapper'>
					<div className='shield'>
						<div className='shelid _second'>{armor}</div>
					</div>
				</div>
				<div className='speed_wrapper'>
					<p>{speed}</p>
					<span>Скорость</span>
				</div>
				<div className='bonus_wrapper'>
					<p>+{bonus}</p>
					<span>владение</span>
				</div>
				<Money
					money_in_gold={money_in_gold}
					gold={gold}
					setGold={setGold}
					silver={silver}
					setSilver={setSilver}
					copper={copper}
					setCopper={setCopper}
					platinum={platinum}
					setPlatinum={setPlatinum}
					electrum={electrum}
					setElectrum={setElectrum}
				/>
				<div
					className='hp_wrapper'
					style={
						{
							'--hpColor': `${hpColor}`,
						} as React.CSSProperties
					}
					onClick={() => setShowHpClac(true)}
				>
					<HeartFilled />
					<div className='hp_inf'>
						<p className='currentHPPar'>{currentHp}</p>
						<p>/</p>
						<p className='maxHpPAr'>{maxHp}</p>
					</div>
				</div>
			</div>
			{showSettings && (
				<div className='modal'>
					<div className='modal-content'>
						<CharacterSettings
							armor={armor}
							name={name}
							speed={speed}
							setName={setName}
							setArmor={setArmor}
							setSpeed={setSpeed}
							onClose={() => setShowSettings(false)}
							secondaryInfo_id={character_secondary_info_id}
							maxHp={maxHp}
							setMaxHp={setMaxHp}
						/>
					</div>
				</div>
			)}

			{showHpClac && (
				<div className='modal'>
					<div className='modal-content'>
						<Calculator
							getter={currentHp}
							setter={setCurrentHp}
							onClose={() => setShowHpClac(false)}
						>
							<div className='healthCalcHeader'>
								<HeartFilled />
								<div className='health'>
									<p className='currentHPPar'>{currentHp}</p>
									<p>/</p>
									<p className='maxHpPAr'>{maxHp}</p>
								</div>
							</div>
						</Calculator>
					</div>
				</div>
			)}
		</div>
	)
}

export default ListHead
