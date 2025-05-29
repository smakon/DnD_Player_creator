import React from 'react'
import useUserStore from '../store/userStore'

export const test = () => {
   const user = useUserStore(state => state.language)
   
	return <div className='test'>sas</div>
}
