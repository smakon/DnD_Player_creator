import { User } from "../Class/User";
import { getCookie } from "./cookies";

export function getUser() {
   const userId = getCookie('id');
   const user = new User(Number(userId));

   const response = user.getUser()
   return response;
}