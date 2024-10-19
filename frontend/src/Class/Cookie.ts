export class Cookie{
   private name: string;
   private value: string | number;
   private days: number;

   constructor(name: string, value: string | number, days: number) {
      this.name = name;
      this.value = value;
      this.days = days;
   }
   
   public setCookie() { 
      var d = new Date();
      d.setTime(d.getTime() + (this.days * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = this.name + "=" + this.value + ";" + expires + ";path=/";
   }
}