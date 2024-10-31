import { useEffect } from 'react';
import { getCookie } from '../../functions/cookies';


export interface ProfileProps {
	userData: {
		id: number | string
		name: string
		password: string
	}
}

const Profile = ({userData}: ProfileProps) => {
   if (getCookie('id') == null) {
      document.location.href = '/login'
      return null;
   }

   return (
      <>
         // TODO: Заполнить страницу всякой информацией
         <p>Hello { userData.name}</p>
      </>
   );
}

export default Profile;
