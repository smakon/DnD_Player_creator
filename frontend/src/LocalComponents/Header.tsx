import { Flex } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { CgProfile } from 'react-icons/cg'
import '../Scss/Header/Header.css'
import Input from '../components/Input/Input'
import { useEffect, useState } from 'react'
import { getUser } from '../functions/user'
import Button from '../components/Button/Button'
import { Link } from 'react-router-dom'


const Header = () => {
	const [userData, setUserData] = useState({"id":'',"name":"","password":""})

	useEffect(() => { 
		const fetchUserData = async () => {
			try {
				const res = await getUser();
				setUserData(res.data[0]);
			} catch (error) {
				console.error(error);
			}
		};
		fetchUserData();
	}, []);

	function focusOn(idName: string) {
		const obj = document.getElementById(idName)
		obj?.focus()
	}

	
	return (
		<header>
			<Flex vertical={false} justify='space-around' align='center'>
				<div className='switcher'>
					<label className='relative inline-flex items-center cursor-pointer'>
						<input className='sr-only peer' value='' type='checkbox' />
						<div className="w-14 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-5 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[10px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:-translate-y-0.5 mt-1"></div>
					</label>
				</div>
				<div className='search__wrapper' onClick={() => focusOn('name_input')}>
					<div className='block'>
						<SearchOutlined />
					</div>
					<Input type='text' placeholder='Имя персонажа' id='name_input' />
				</div>
				<div className='filter__wrapper flex'>
					<FilterOutlined />
					<p>Фильтр</p>
				</div>
				<div className='profile__wrapper'>
					<CgProfile />
					<p>
						{userData == null ? (
								<Link to={'registration'}>
									Go
								</Link>
						) : (
							userData.name
						)}
					</p>
				</div>
			</Flex>
		</header>
	)
}

export default Header
