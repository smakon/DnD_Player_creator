import axios from '../axios'
import { AxiosResponse } from 'axios'

export class DnD_INFO {
	public async getClass(name: string): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(
				`https://www.dnd5eapi.co/api/${name}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при получении класса:', error)
			throw error
		}
	}

	public async getClasses(): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(
				`https://www.dnd5eapi.co/api/classes`
			)
			return response
		} catch (error) {
			console.error('Ошибка при получении классов:', error)
			throw error
		}
	}

	public async getRace(name: string): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(
				`https://www.dnd5eapi.co/api/races/${name}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при получении рас:', error)
			throw error
		}
	}

	public async getRaces(): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.get(
				`https://www.dnd5eapi.co/api/races`
			)
			return response
		} catch (error) {
			console.error('Ошибка при получении расc:', error)
			throw error
		}
	}
}
