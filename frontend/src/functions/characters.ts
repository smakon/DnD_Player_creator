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

export function updateCharacter(
   id: number,
   level: number,
   race: string,
   c_class: string,
   name: string)
{
   const characters = new Characters()
   const response = characters.updateCharacter(id, level, race, c_class, name)
   return response
}
