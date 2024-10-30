import { User } from '../Class/User'
import { getCookie } from './cookies'

export function getUser() {
	const user = new User()
	const userId = getCookie('id')
	const response = user.getUser(Number(userId))
	return response
}

export function createUser(name: string, password: string) {
	const user = new User()
	const response = user.createUser(name, password)
	return response
}

export function findUser(name: string, password: string) {
	const user = new User()
	const response = user.findUser(name, password)
	return response
}
