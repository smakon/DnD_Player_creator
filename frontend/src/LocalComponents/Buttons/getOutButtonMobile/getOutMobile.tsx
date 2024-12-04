import { deleteCookie } from '../../../functions/cookies';
import './getOutMobile.css'
const GetOutMobile = () => {
   return (
			<div className='getOutM_wrapper'>
				<button className='getOutBtnM' onClick={() => deleteCookie('id')}>
					<span className='getOutBtnM_text'>ВЫЙТИ</span>
				</button>
			</div>
		)
}

export default GetOutMobile;
