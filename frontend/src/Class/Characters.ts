import axios from '../axios'
import { AxiosResponse } from 'axios'

export class Characters {
	public async allCharacters(): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(`/allCharacters`)
			return response
		} catch (error) {
			console.error('Ошибка при получении персонажей:', error)
			throw error
		}
	}

	public async getCharacter(id: number): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(`/getCharacter/${id}`)
			return response
		} catch (error) {
			console.error('Ошибка при получении данных персонажа:', error)
			throw error
		}
	}

	public async updateCharacter(
		id: number,
		level: number,
		race: string,
		c_class: string,
		name: string,
		hp: string
	): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.post(
				`/updateCharacter/${id}/${level}/${race}/${c_class}/${name}/${hp}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при изменении персонажа:', error)
			throw error
		}
	}

	public async getCharacterInfo(character_id: number): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(
				`/getCharacterInfo/${character_id}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при получении информации о персонаже:', error)
			throw error
		}
	}

	public async getCharacterSecondaryInfo(id: number): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(
				`/getCharacterSecondaryInfo/${id}`
			)
			return response
		} catch (error) {
			console.error(
				'Ошибка при получении второстепенной информации о персонаже:',
				error
			)
			throw error
		}
	}

	public async getCharacterMoney(id: number): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(
				`/getCharacterMoney/${id}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при получении денежных средств персонажа:', error)
			throw error
		}
	}

	public async updateCharacterMoney(
		id: number,
		gold: number,
		platinum: number,
		silver: number,
		copper: number,
		electrum: number
	): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.post(
				`/updateCharacterMoney/${id}/${gold}/${silver}/${platinum}/${electrum}/${copper}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при изменении денежных средств персонажа:', error)
			throw error
		}
	}

	public async updateCharacterSecondaryInfo(
		id: number,
		armor: number,
		speed: number
	): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.post(
				`/updateCharacterSecondaryInfo/${id}/${armor}/${speed}`
			)
			return response
		} catch (error) {
			console.error(
				'Ошибка при изменении второстепенной информации персонажа:',
				error
			)
			throw error
		}
	}

	public async getCharacterModify(id: number): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(
				`/getCharacterModify/${id}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при получении изменений персонажа:', error)
			throw error
		}
	}

	public async updateCharacterModify(
		id: number,
		strength: number,
		dexterity: number,
		physique: number,
		intelligence: number,
		wisdom: number,
		charisma: number
	) {
		try {
			const response: AxiosResponse = await axios.post(
				`/updateCharacterModify/${id}/${strength}/${dexterity}/${physique}/${intelligence}/${wisdom}/${charisma}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при изменении изменений персонажа:', error)
			throw error
		}
	}

	public async getCharacterSkills(id: number): Promise<AxiosResponse> { 
		try {
         const response: AxiosResponse = await axios.get(`/getCharacterSkills/${id}`)
         return response
      } catch (error) {
         console.error('Ошибка при получении навыков персонажа:', error)
         throw error
      }
	}
	public async updateCharacterSkills(
		id: number,
		skills: string
	): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.post(`/updateCharacterSkills/${id}/${skills}`,)
			return response
		} catch (error) {
			console.error('Ошибка при изменении навыков персонажа:', error)
			throw error
		}
	}

	public async getCharacterOfName(name: string): Promise<AxiosResponse> { 
		try {
         const response: AxiosResponse = await axios.get(
						`/getCharactersOfName/${name}`
					)
         return response
      } catch (error) {
         console.error('Ошибка при получении персонажа по имени:', error)
         throw error
      }
	}
}
