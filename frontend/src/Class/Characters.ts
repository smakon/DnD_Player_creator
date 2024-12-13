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

	public async updateCharacterSecondaryInfo(id: number, armor: number, speed: number): Promise<AxiosResponse> { 
		try {
         const response: AxiosResponse = await axios.post(
            `/updateCharacterSecondaryInfo/${id}/${armor}/${speed}`
         )
         return response
      } catch (error) {
         console.error('Ошибка при изменении второстепенной информации персонажа:', error)
         throw error
      }
	}
}
