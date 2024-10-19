import { Cookie } from "../Class/Cookie";

export function setCookie(name: string, value: string | number, date: number) {
	const cookie = new Cookie(name, value, date)
	cookie.setCookie()
}

export function getCookie(name: string) {
   const cookies = document.cookie
   const cookieValue = cookies.split('; ').find(c => c.startsWith(name + '='))

   if (cookieValue) {
      return cookieValue.split('=')[1]
   }
   return null
}