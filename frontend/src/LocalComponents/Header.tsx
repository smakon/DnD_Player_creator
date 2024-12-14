import { Flex } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { CgProfile } from 'react-icons/cg'
import '../Scss/Header/Header.css'
import Input from '../components/Input/Input'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setCookie } from '../functions/cookies'
import { getUserCharacters, updateUser } from '../functions/user'
import { getCharacterOfName } from '../functions/characters'


export interface HeaderProps {
	userAccount: {
		id: number | string
		name: string
		password: string
	}
	setUserCharacters: (
		character: {
			id: number
			user_id: number
			name: string
			class: string
			race: string
			level: number
			hp: string
			created_at: string
		}[]
	) => void
}
const Header = ({ userAccount, setUserCharacters }: HeaderProps) => {
	const nav = useNavigate()
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
	const fetchUserCharacters = async () => {
		try {
			const res = await getUserCharacters()
			setUserCharacters(res.data)
		} catch (error) {
			console.error(error)
		}
	}
	function searchCharacter(character: string) { 
		if (character === '') {
			fetchUserCharacters()
			return
		} else {
			getCharacterOfName(character).then(res => {
				console.log(res.data)
				setUserCharacters(res.data)
			})
		}
	}

	return (
		<header>
			<Flex vertical={false} justify='space-around' align='center'>
				<Link to='/' style={{ color: '#f9f9f9' }}>
					Главная
				</Link>
				<div className='search__wrapper' onClick={() => focusOn('name_input')}>
					<div className='block'>
						<SearchOutlined />
					</div>
					<input type='text' placeholder='Имя персонажа' id='name_input'
						onChange={e => searchCharacter(e.target.value)} />
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
