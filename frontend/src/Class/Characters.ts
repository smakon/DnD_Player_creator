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
      name: string
	): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.post(
				`/updateCharacter/${id}/${level}/${race}/${c_class}/${name}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при изменении персонажа:', error)
			throw error
		}
	}
}
