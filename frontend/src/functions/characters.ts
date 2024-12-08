import { Characters } from "../Class/Characters";

export function allCharacters(){
   const characters = new Characters()
   const response = characters.allCharacters()
   return response
}

export function getCharacter(id: number) {
   const characters = new Characters()
   const response = characters.getCharacter(id)
   return response
}