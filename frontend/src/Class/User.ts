import axios from '../axios'
import { AxiosResponse } from 'axios'


export class User {
   
   public async findUser(name: string, password: string): Promise<AxiosResponse>{
      try {
         const response: AxiosResponse = await
         axios.get(`/findUser/name=${name}/password=${password}`)
         return response;
      }
      catch (error) {
         console.error('Ошибка при поиске пользователя:', error);
         throw error;
      }
   }

   public async getUser(id: number): Promise<AxiosResponse> {
      try {
         const response: AxiosResponse = await
			axios.get(`/getUser/id=${id}`)
         return response;
      } catch (error) {
         console.error('Ошибка при получении данных пользователя:', error);
         throw error;
      }
   }
   
   public async createUser(name:string, password: string): Promise<AxiosResponse> { 
      try {
         const response: AxiosResponse = await
            axios.post(`/createUser/${name}/${password}`);
         return response;
      } catch (error) {
         console.error('Ошибка при создании пользователя:', error);
         throw error;
      }
   }
}