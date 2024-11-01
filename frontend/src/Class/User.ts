import axios from '../axios'
import { AxiosResponse } from 'axios'


export class User {
   
   public async findUser(name: string, password: string): Promise<AxiosResponse>{
      try {
         const response: AxiosResponse = await
			axios.post(`/findUser/name=${name}/password=${password}`)
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
			axios.post(`/getUser/id=${id}`)
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

   public async getUserCharacters(id: number): Promise<AxiosResponse> { 
      try {
         const response: AxiosResponse = await
         axios.post(`/getUserCharacters/id=${id}`);
         return response;
      } catch (error) {
         console.error('Ошибка при получении персонажей пользователя:', error);
         throw error;
      }
   }

   public async getUserBook(id: number): Promise<AxiosResponse> { 
      try {
         const response: AxiosResponse = await
			axios.post(`/getUserBook/id=${id}`)
         return response;
      } catch (error) {
         console.error('Ошибка при получении книги пользователя:', error);
         throw error;
      }
   }

   public async getUserData(id: number): Promise<AxiosResponse> { 
      try {
         const response: AxiosResponse = await
			axios.post(`/getUserData/id=${id}`)
         return response;
      } catch (error) {
         console.error('Ошибка при получении данных пользователя:', error);
         throw error;
      }
   }
}