import { Flex } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { CgProfile } from 'react-icons/cg'
import '../Scss/Header/Header.css'
import Input from '../components/Input/Input'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setCookie } from '../functions/cookies'
import { updateUser } from '../functions/user'


export interface HeaderProps {
	userAccount: {
		id: number | string
		name: string
		password: string
	}
	userData: {
		user_id: number
		dice_count: number
		theme: number
		vibration: number
		language: string
	}

	vibration: number
	language: string
	setTheme: (value: number) => void
	theme: number
}
const Header = ({ userAccount, setTheme, theme, userData, vibration, language }: HeaderProps) => {
	useEffect(() => {
		if (userAccount !== undefined && Number(userAccount.id) > 0) {
			setCookie('id', userAccount.id, 3)
		} else {
			console.debug(`err`)
		}
	}, [userAccount])
	
	function focusOn(idName: string) {
		const obj = document.getElementById(idName)
		obj?.focus()
	}
	const toggleTheme = (number: number) => {
		setTheme(number)
		updateUser(userData.dice_count, number, vibration, language)
	}
	console.log(theme);
	
	return (
		<header>
			<Flex vertical={false} justify='space-around' align='center'>
				<Link to='/' style={{ color: '#f9f9f9' }}>
					Главная
				</Link>
				<div className='switcher'>
					<label className='relative inline-flex items-center cursor-pointer'>
						<input
							checked={theme === 0}
							className='sr-only peer'
							value=''
							type='checkbox'
							onChange={() => toggleTheme(theme == 1 ? 0 : 1)}
						/>
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
					<Link to={'profile'}>
						<CgProfile />
					</Link>
					<p>
						{userAccount == null ? (
							<Link to={'login'}>Войти</Link>
						) : (
							userAccount.name
						)}
					</p>
				</div>
			</Flex>
		</header>
	)
}

export default Header
