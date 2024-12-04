import { deleteCookie } from '../../../functions/cookies'
import './getOutDesktop.css'

const GetOutDesktop = () => {
   
   return (
			<button className='getOutD' onClick={() => deleteCookie('id')}>
				Выйти
			</button>
		)
}

export default GetOutDesktop
