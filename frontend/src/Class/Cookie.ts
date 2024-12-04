export class Cookie {

	public setCookie(name: string, value: string | number, days: number) {
		var d = new Date()
		d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
		var expires = 'expires=' + d.toUTCString()
		document.cookie = name + '=' + value + ';' + expires + ';path=/'
	}

   public delCookie(name: string) {
      document.cookie =
				name + '=; Max-Age=0; path=/; domain=' + window.location.hostname
   }
}