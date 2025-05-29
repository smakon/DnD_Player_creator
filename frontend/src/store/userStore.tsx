import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { UserData } from '../interfaces'
import { getUser } from '../functions/user'


export interface userStore extends UserData {
	setUser: () => {}
}

export const useUserStore = create(
   devtools<userStore>((set, get) => ({
      // States
      user_id: 0,
      theme: 0,
      vibration: 0,
      language: 'ru',
      dice_count: 0,

         
      // Mutators

      setUser: async () => {
         set((await getUser()).data[0])
      },

      
   }))
);

