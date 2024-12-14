import { Characters } from '../Class/Characters'

export function allCharacters() {
	const characters = new Characters()
	const response = characters.allCharacters()
	return response
}

export function getCharacter(id: number) {
	const characters = new Characters()
	const response = characters.getCharacter(id)
	return response
}

export function updateCharacter(
	id: number,
	level: number,
	race: string,
	c_class: string,
	name: string,
	hp: string
) {
	const characters = new Characters()
	const response = characters.updateCharacter(id, level, race, c_class, name, hp)
	return response
}

export function getCharacterInfo(character_id: number) {
	const characters = new Characters()
	const response = characters.getCharacterInfo(character_id)
	return response
}

export function getCharacterSecondaryInfo(id: number) {
	const characters = new Characters()
	const response = characters.getCharacterSecondaryInfo(id)
	return response
}

export function getCharacterMoney(id: number) {
	const characters = new Characters()
	const response = characters.getCharacterMoney(id)
	return response
}

export function updateCharacterMoney(
	id: number,
	gold: number,
	platinum: number,
	silver: number,
	copper: number,
	electrum: number
) {
	const characters = new Characters()
	const response = characters.updateCharacterMoney(
		id,
		gold,
		platinum,
		silver,
		copper,
		electrum
	)
	return response
}

export function updateCharacterSecondaryInfo(id: number, armor: number, speed: number) {
   const characters = new Characters()
   const response = characters.updateCharacterSecondaryInfo(id, armor, speed)
   return response
}

export function getCharacterModify(id: number) { 
	const characters = new Characters()
   const response = characters.getCharacterModify(id)
   return response
}

export function updateCharacterModify(
   id: number,
   strength: number,
	dexterity: number,
	physique: number,
   intelligence: number,
   wisdom: number,
	charisma: number
	) {
   const characters = new Characters()
	const response = characters.updateCharacterModify(id, strength, dexterity, physique, intelligence, wisdom, charisma)
	return response
}

export function getCharacterSkills(id: number) {
	const characters = new Characters()
   const response = characters.getCharacterSkills(id)
   return response
}

export function updateCharacterSkills(id: number, skills: string) {
	const characters = new Characters()
   const response = characters.updateCharacterSkills(id, skills)
   return response
}

export function getCharacterOfName(name: string) { 
	const characters = new Characters()
   const response = characters.getCharacterOfName(name)
   return response
}