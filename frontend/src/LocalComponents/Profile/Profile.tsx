import { getCookie } from '../../functions/cookies';
import { getUserBook, getUserCharacters } from '../../functions/user';


export interface ProfileProps {
	userAccount: {
		id: number | string
		name: string
		password: string
	}
	userData: {
		user_id: number | string
		theme: number | string
		vibration: number | string
		language: number | string
		dice_count: number | string
   }
   userCharacters: object[]
   userBook: object[]
}

const Profile = ({ userAccount, userData, userCharacters, userBook }: ProfileProps) => {
	if (getCookie('id') == null) {
		document.location.href = '/login'
		return null
	}

	return (
		<div className='profile'>
			// TODO: Заполнить страницу всякой информацией
			<h1 className=' text-2xl font-bold flex justify-center'>
				Hello {userAccount.name}
			</h1>
			<p>Персонажей: {userCharacters.length}</p>
			<p>Заклинаний в книге: {userBook.length}</p>
			<p>Брошено костей: {userData.dice_count}</p>
		</div>
	)
}

export default Profile;
