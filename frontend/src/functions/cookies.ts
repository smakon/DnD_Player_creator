import { Cookie } from "../Class/Cookie";

export function setCookie(name: string, value: string | number, days: number) {
	const cookie = new Cookie(name, value, days)
	cookie.setCookie()
}

export function getCookie(name: string): string | null {
   const cookies = document.cookie
   const cookieValue = cookies.split('; ').find(c => c.startsWith(name + '='))

   if (cookieValue) {
      return cookieValue.split('=')[1]
   }
   return null
}