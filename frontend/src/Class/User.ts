import axios from '../axios'
import { AxiosResponse } from 'axios'


export class User {
   private id: number;
   constructor(userId: number) { 
      this.id = userId;
   }

   public async getUser(): Promise<AxiosResponse> {
      try {
         const response: AxiosResponse = await
            axios.get(`/getUser/id=${this.id}`);
         return response;
      } catch (error) {
         console.error('Ошибка при получении данных пользователя:', error);
         throw error;
      }
   }
   
}