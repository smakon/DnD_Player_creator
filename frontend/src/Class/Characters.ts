import axios from '../axios'
import { AxiosResponse } from 'axios'

export class Characters {
   public async  allCharacters(): Promise<AxiosResponse> {
      try {
         const response: AxiosResponse =
            await axios.get(`/allCharacters`)
         return response
      }
      catch (error) {
         console.error('Ошибка при получении персонажей:', error)
         throw error
      }
   }
}
