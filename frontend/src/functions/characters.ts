import { Characters } from "../Class/Characters";

export function allCharacters(){
   const characters = new Characters()
   const response = characters.allCharacters()
   return response
}