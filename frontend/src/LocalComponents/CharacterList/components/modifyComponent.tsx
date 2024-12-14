import { useEffect, useState } from 'react'
import SkillComponent from './skillComponent'
import { createNotify } from '../../../functions/notify'
import { d20 } from '../dice'
import { updateCharacterSkills } from '../../../functions/characters'

interface modifyComponentProps {
	modifyName: string
	modify: number
	skills: string
   skill_id: number

	setter: (value: number) => void
}

export const ModifyComponent = ({
   modifyName,
   modify,
   setter,
   skills,
   skill_id
}: modifyComponentProps) => {
   const [athleticsState, setAthleticsState] = useState(1)
   const [athleticsBonus, setAthleticsBonus] = useState(0)

   const [acrobaticsState, setAcrobaticsState] = useState(0)
   const [acrobaticsBonus, setAcrobaticsBonus] = useState(0)

   const [sleightOfHandState, setSleightOfHandState] = useState(0)
   const [sleightOfHandBonus, setSleightOfHandBonus] = useState(0)

   const [stealthState, setStealthState] = useState(0)
   const [stealthBonus, setStealthBonus] = useState(0)

   const [analysisState, setAnalysisState] = useState(0)
   const [analysisBonus, setAnalysisBonus] = useState(0)

   const [historyState, setHistoryState] = useState(0)
   const [historyBonus, setHistoryBonus] = useState(0)

   const [magicState, setMagicState] = useState(0)
   const [magicBonus, setMagicBonus] = useState(0)

   const [natureState, setNatureState] = useState(0)
   const [natureBonus, setNatureBonus] = useState(0)

   const [religionState, setReligionState] = useState(0)
   const [religionBonus, setReligionBonus] = useState(0)

   const [perceptionState, setPerceptionState] = useState(0)
   const [perceptionBonus, setPerceptionBonus] = useState(0)

   const [survivalState, setSurvivalState] = useState(0)
   const [survivalBonus, setSurvivalBonus] = useState(0)

   const [medicineState, setMedicineState] = useState(0)
   const [medicineBonus, setMedicineBonus] = useState(0)

   const [insightState, setInsightState] = useState(0)
   const [insightBonus, setInsightBonus] = useState(0)

   const [animalCareState, setAnimalCareState] = useState(0)
   const [animalCareBonus, setAnimalCareBonus] = useState(0)

   const [performanceState, setPerformanceState] = useState(0)
   const [performanceBonus, setPerformanceBonus] = useState(0)

   const [intimidationState, setIntimidationState] = useState(0)
   const [intimidationBonus, setIntimidationBonus] = useState(0)

   const [beliefState, setBeliefState] = useState(0)
   const [beliefBonus, setBeliefBonus] = useState(0)

   const [jsonSkills, setJsonSkills] = useState({
			Athletics: { addiction: 'Strength', state: -1, bonus: -1 },
			Acrobatics: { addiction: 'Dexterity', state: -1, bonus: -1 },
			'Sleight of Hand': { addiction: 'Dexterity', state: -1, bonus: -1 },
			Stealth: { addiction: 'Dexterity', state: -1, bonus: -1 },
			Analysis: { addiction: 'Intelligence', state: -1, bonus: -1 },
			History: { addiction: 'Intelligence', state: -1, bonus: -1 },
			Magic: { addiction: 'Intelligence', state: -1, bonus: -1 },
			Nature: { addiction: 'Intelligence', state: -1, bonus: -1 },
			Religion: { addiction: 'Intelligence', state: -1, bonus: -1 },
			Perception: { addiction: 'Wisdom', state: -1, bonus: -1 },
			Survival: { addiction: 'Wisdom', state: -1, bonus: -1 },
			Medicine: { addiction: 'Wisdom', state: -1, bonus: -1 },
			Insight: { addiction: 'Wisdom', state: -1, bonus: -1 },
			'Animal Care': { addiction: 'Wisdom', state: -1, bonus: -1 },
			Performance: { addiction: 'Charisma ', state: -1, bonus: -1 },
			Intimidation: { addiction: 'Charisma', state: -1, bonus: -1 },
			Belief: { addiction: 'Charisma', state: -1, bonus: -1 },
   })
   
   const [newSkill, setNewSkill] = useState({
			Athletics: {
				addiction: 'Strength',
				state: athleticsState,
				bonus: athleticsBonus,
			},
			Acrobatics: {
				addiction: 'Dexterity',
				state: acrobaticsState,
				bonus: acrobaticsBonus,
			},
			'Sleight of Hand': {
				addiction: 'Dexterity',
				state: sleightOfHandState,
				bonus: sleightOfHandBonus,
			},
			Stealth: {
				addiction: 'Dexterity',
				state: stealthState,
				bonus: stealthBonus,
			},
			Analysis: {
				addiction: 'Intelligence',
				state: analysisState,
				bonus: analysisBonus,
			},
			History: {
				addiction: 'Intelligence',
				state: historyState,
				bonus: historyBonus,
			},
			Magic: {
				addiction: 'Intelligence',
				state: magicState,
				bonus: magicBonus,
			},
			Nature: {
				addiction: 'Intelligence',
				state: natureState,
				bonus: natureBonus,
			},
			Religion: {
				addiction: 'Intelligence',
				state: religionState,
				bonus: religionBonus,
			},
			Perception: {
				addiction: 'Wisdom',
				state: perceptionState,
				bonus: perceptionBonus,
			},
			Survival: {
				addiction: 'Wisdom',
				state: survivalState,
				bonus: survivalBonus,
			},
			Medicine: {
				addiction: 'Wisdom',
				state: medicineState,
				bonus: medicineBonus,
			},
			Insight: {
				addiction: 'Wisdom',
				state: insightState,
				bonus: insightBonus,
			},
			'Animal Care': {
				addiction: 'Wisdom',
				state: acrobaticsState,
				bonus: animalCareBonus,
			},
			Performance: {
				addiction: 'Charisma ',
				state: perceptionState,
				bonus: perceptionBonus,
			},
			Intimidation: {
				addiction: 'Charisma',
				state: insightState,
				bonus: intimidationBonus,
			},
			Belief: { addiction: 'Charisma', state: beliefState, bonus: beliefBonus },
		})
   const handleChange = (value: number, setter: (value: number) => void) => {
      setter(value)
   }

   const bonus2mod = (modify: number) => {
      const mod = Math.floor((modify - 10) / 2)
      if (mod === 0) return 0
      if (mod < 0) return mod
      if (mod > 0) return `+${mod}`
   }

   const skills_array = [
      ['Athletics', athleticsState, athleticsBonus, 'Strength'],
      ['Acrobatics', acrobaticsState, acrobaticsBonus, 'Dexterity'],
      ['Sleight of Hand', sleightOfHandState, sleightOfHandBonus, 'Dexterity'],
      ['Stealth', stealthState, stealthBonus, 'Intelligence'],
      ['Analysis', analysisState, analysisBonus, 'Intelligence'],
      ['History', historyState, historyBonus, 'Intelligence'],
      ['Magic', magicState, magicBonus, 'Intelligence'],
      ['Nature', natureState, natureBonus, 'Intelligence'],
      ['Religion', religionState, religionBonus, 'Intelligence'],
      ['Perception', perceptionState, perceptionBonus, 'Wisdom'],
      ['Survival', survivalState, survivalBonus, 'Wisdom'],
      ['Medicine', medicineState, medicineBonus, 'Wisdom'],
      ['Insight', insightState, insightBonus, 'Wisdom'],
      ['Animal Care', animalCareState, animalCareBonus, 'Wisdom'],
      ['Performance', performanceState, performanceBonus, 'Charisma'],
      ['Intimidation', intimidationState, intimidationBonus, 'Charisma'],
      ['Belief', beliefState, beliefBonus, 'Charisma'],
   ]

   useEffect(() => {
      if (skills.length > 0) {
         setJsonSkills(JSON.parse(skills))
      }
   }, [skills])
   useEffect(() => { 
      setAthleticsState(jsonSkills.Athletics.state)
         setAthleticsBonus(jsonSkills.Athletics.bonus)
         setAcrobaticsState(jsonSkills.Acrobatics.state)
         setAcrobaticsBonus(jsonSkills.Acrobatics.bonus)
         setSleightOfHandState(jsonSkills['Sleight of Hand'].state)
         setSleightOfHandBonus(jsonSkills['Sleight of Hand'].bonus)
         setStealthState(jsonSkills.Stealth.state)
         setStealthBonus(jsonSkills.Stealth.bonus)
         setAnalysisState(jsonSkills.Analysis.state)
         setAnalysisBonus(jsonSkills.Analysis.bonus)
         setHistoryState(jsonSkills.History.state)
         setHistoryBonus(jsonSkills.History.bonus)
         setMagicState(jsonSkills.Magic.state)
         setMagicBonus(jsonSkills.Magic.bonus)
         setNatureState(jsonSkills.Nature.state)
         setNatureBonus(jsonSkills.Nature.bonus)
         setReligionState(jsonSkills.Religion.state)
         setReligionBonus(jsonSkills.Religion.bonus)
         setPerceptionState(jsonSkills.Perception.state)
         setPerceptionBonus(jsonSkills.Perception.bonus)
         setSurvivalState(jsonSkills.Survival.state)
         setSurvivalBonus(jsonSkills.Survival.bonus)
         setMedicineState(jsonSkills.Medicine.state)
         setMedicineBonus(jsonSkills.Medicine.bonus)
         setInsightState(jsonSkills.Insight.state)
         setInsightBonus(jsonSkills.Insight.bonus)
         setAnimalCareState(jsonSkills['Animal Care'].state)
         setAnimalCareBonus(jsonSkills['Animal Care'].bonus)
         setPerformanceState(jsonSkills.Performance.state)
         setPerformanceBonus(jsonSkills.Performance.bonus)
         setIntimidationState(jsonSkills.Intimidation.state)
         setIntimidationBonus(jsonSkills.Intimidation.bonus)
         setBeliefState(jsonSkills.Belief.state)
         setBeliefBonus(jsonSkills.Belief.bonus)
   },[jsonSkills])
   useEffect(() => {
      if (skill_id > 0) {         
         setNewSkill({
         Athletics: { addiction: 'Strength', state: athleticsState, bonus: athleticsBonus},
         Acrobatics: { addiction: 'Dexterity', state: acrobaticsState, bonus: acrobaticsBonus},
         'Sleight of Hand': { addiction: 'Dexterity', state: sleightOfHandState, bonus: sleightOfHandBonus},
         Stealth: { addiction: 'Dexterity', state: stealthState, bonus: stealthBonus},
         Analysis: { addiction: 'Intelligence', state: analysisState, bonus: analysisBonus},
         History: { addiction: 'Intelligence', state: historyState, bonus: historyBonus},
         Magic: { addiction: 'Intelligence', state: magicState, bonus: magicBonus },
         Nature: { addiction: 'Intelligence', state: natureState, bonus: natureBonus },
         Religion: { addiction: 'Intelligence', state: religionState, bonus: religionBonus },
         Perception: { addiction: 'Wisdom', state: perceptionState, bonus: perceptionBonus},
         Survival: { addiction: 'Wisdom', state: survivalState, bonus: survivalBonus},
         Medicine: { addiction: 'Wisdom', state: medicineState, bonus: medicineBonus },
         Insight: { addiction: 'Wisdom', state: insightState, bonus: insightBonus},
         'Animal Care': { addiction: 'Wisdom', state: acrobaticsState, bonus: animalCareBonus},
         Performance: { addiction: 'Charisma ', state: perceptionState, bonus: perceptionBonus},
         Intimidation: { addiction: 'Charisma', state: insightState, bonus: intimidationBonus},
         Belief: { addiction: 'Charisma', state: beliefState, bonus: beliefBonus},
      })
      }
   }, [
			athleticsState,
			athleticsBonus,
			acrobaticsState,
			acrobaticsBonus,
			sleightOfHandState,
			sleightOfHandBonus,
			stealthState,
			stealthBonus,
			analysisState,
			analysisBonus,
			historyState,
			historyBonus,
			magicState,
			magicBonus,
			natureState,
			natureBonus,
			religionState,
			religionBonus,
			perceptionState,
			perceptionBonus,
			survivalState,
			survivalBonus,
			medicineState,
			medicineBonus,
			insightState,
			insightBonus,
			animalCareState,
			animalCareBonus,
			performanceState,
			performanceBonus,
			intimidationState,
			intimidationBonus,
			beliefState,
			beliefBonus,
   ])
   
   useEffect(() => {
      updateCharacterSkills(skill_id, JSON.stringify(newSkill))
   }, [newSkill])
	return (
		<div className='modify' id={modifyName}>
			<div className='mod_info'>
				<h1 className='modify_name'>{modifyName}</h1>
				<div className='big_line'></div>
				<div className='modify_num'>
					<input
						type='number'
						value={modify}
						min={0}
						onChange={e => handleChange(Number(e.target.value), setter)}
					/>
				</div>
			</div>
         <div className='examination_wrapper' onClick={() => {
            const dice20 = d20()
            const mod = Math.floor((modify - 10) / 2)
            createNotify({
							appearance: 'success',
							message: `${modifyName}: ${dice20} + ${mod} = ${
								dice20 + mod
							}`,
							theme: 1,
							position: 'bottom-left',
						})
         }}>
				<p>Examination: {bonus2mod(modify)}</p>
			</div>
         <div className='mod_addiction'>
            {skills_array.map(skill => {
               if (skill[3] === modifyName) {
                  const skillName = String(skill[0])
                  const state = Number(skill[1])
                  const bonus = Number(skill[2])

                  return (
                     <SkillComponent
                        skillName={skillName}
                        state={state}
                        bonus={bonus}
                        setBonus={
                           skillName === 'Athletics'
                              ? setAthleticsBonus
                              : skillName === 'Acrobatics'
                                 ? setAcrobaticsBonus
                                 : skillName === 'Sleight of Hand'
                                    ? setSleightOfHandBonus
                                    : skillName === 'Stealth'
                                       ? setStealthBonus
                                       : skillName === 'Analysis'
                                          ? setAnalysisBonus
                                          : skillName === 'History'
                                             ? setHistoryBonus
                                             : skillName === 'Magic'
                                                ? setMagicBonus
                                                : skillName === 'Nature'
                                                   ? setNatureBonus
                                                   : skillName === 'Religion'
                                                      ? setReligionBonus
                                                      : skillName === 'Perception'
                                                         ? setPerceptionBonus
                                                         : skillName === 'Survival'
                                                            ? setSurvivalBonus
                                                            : skillName === 'Medicine'
                                                               ? setMedicineBonus
                                                               : skillName === 'Insight'
                                                                  ? setInsightBonus
                                                                  : skillName === 'Animal Care'
                                                                     ? setAnimalCareBonus
                                                                     : skillName === 'Performance'
                                                                        ? setPerformanceBonus
                                                                        : skillName === 'Intimidation'
                                                                           ? setIntimidationBonus
                                                                           : skillName === 'Belief'
                                                                              ? setBeliefBonus
                                                                              : () => { }
                        }
                        setState={
                           skillName === 'Athletics'
                              ? setAthleticsState
                              : skillName === 'Acrobatics'
                                 ? setAcrobaticsState
                                 : skillName === 'Sleight of Hand'
                                    ? setSleightOfHandState
                                    : skillName === 'Stealth'
                                       ? setStealthState
                                       : skillName === 'Analysis'
                                          ? setAnalysisState
                                          : skillName === 'History'
                                             ? setHistoryState
                                             : skillName === 'Magic'
                                                ? setMagicState
                                                : skillName === 'Nature'
                                                   ? setNatureState
                                                   : skillName === 'Religion'
                                                      ? setReligionState
                                                      : skillName === 'Perception'
                                                         ? setPerceptionState
                                                         : skillName === 'Survival'
                                                            ? setSurvivalState
                                                            : skillName === 'Medicine'
                                                               ? setMedicineState
                                                               : skillName === 'Insight'
                                                                  ? setInsightState
                                                                  : skillName === 'Animal Care'
                                                                     ? setAnimalCareState
                                                                     : skillName === 'Performance'
                                                                        ? setPerformanceState
                                                                        : skillName === 'Intimidation'
                                                                           ? setIntimidationState
                                                                           : skillName === 'Belief'
                                                                              ? setBeliefState
                                                                              : () => { }
                        }
                        mod={Math.floor((modify - 10) / 2)}
                     />
                  )
               }
            })}
			</div>
		</div>
	)
}
