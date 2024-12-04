import { Cookie } from "../Class/Cookie";


export function setCookie(name: string, value: string | number, days: number) {
   const cookie = new Cookie()
	cookie.setCookie(name, value, days)
}

export function getCookie(name: string): string | null {
   const cookies = document.cookie
   const cookieValue = cookies.split('; ').find(c => c.startsWith(name + '='))

   if (cookieValue) {
      return cookieValue.split('=')[1]
   }
   return null
}

export function deleteCookie(name: string) {
   const cookie = new Cookie()
   cookie.delCookie(name)
   window.location.reload()
}