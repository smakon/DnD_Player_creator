import { func } from 'prop-types'
import { User } from '../Class/User'
import { getCookie } from './cookies'

const userId = getCookie('id')

export function getUser() {
	const user = new User()
	const response = user.getUser(Number(userId))
	return response
}
export function getUserCharacters() {
	const user = new User()
	const response = user.getUserCharacters(Number(userId))
	return response
}

export function getUserBook() {
	const user = new User()
	const response = user.getUserBook(Number(userId))
	return response
}

export function getUserData() {
	const user = new User()
	const response = user.getUserData(Number(userId))
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

export function updateUser(
	dice: number | string,
	theme: number | string,
	vibration: number | string,
	language: string
)
{
	const user = new User()
   const response = user.updateUserData(
			Number(userId),
			dice,
			theme,
			vibration,
			language
		)
   return response
}