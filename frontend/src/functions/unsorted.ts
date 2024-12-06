import axios from '../axios'
import { AxiosResponse } from 'axios'


export async function allCharacters(): Promise<AxiosResponse> {
	try {
		const response: AxiosResponse = await axios.get(
			`/allCharacters`
		)
		return response
	} catch (error) {
		console.error('Ошибка при создании персонажа:', error)
		throw error
	}
}

