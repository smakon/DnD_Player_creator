import { Flex } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { CgProfile } from 'react-icons/cg'
import '../Scss/Header/Header.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setCookie } from '../functions/cookies'
import { getUserCharacters } from '../functions/user'
import { getCharacterOfName } from '../functions/characters'
import { classes_list, races_list } from '../functions/dnd_info'
import { filter } from '../functions/characters'

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
			create_date: string
		}[]
	) => void

	t: (value: string) => string
}
const Header = ({ userAccount, setUserCharacters, t }: HeaderProps) => {
	const nav = useNavigate()
	const [showModal, setShowModal] = useState(false)
	const [filterClass, setFilterClass] = useState('none')
	const [filterRace, setFilterRaces] = useState('none')
	const [races, setRaces] = useState([
		{
			name: '',
			url: '',
			index: '',
		},
	])
	const [classes, setClasses] = useState([
		{
			name: '',
			url: '',
			index: '',
		},
	])
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

	function workFilter(race: string, c_class: string) { 
		if (race === 'none' && c_class === 'none') {
			fetchUserCharacters()
			return
		}
		else {
			filter(c_class, race).then(res => {
				setUserCharacters(res.data)
			})
		}
	}
	useEffect(() => {
		races_list()
			.then(races => {
				setRaces(races.data.results)
			})
			.catch(err => console.error(err))
		
		classes_list()
			.then(classes => {
				setClasses(classes.data.results)
			})
			.catch(err => console.error(err))
	}, [userAccount])
	
	return (
		<header>
			<Flex vertical={false} justify='space-around' align='center'>
				<Link to='/' style={{ color: '#f9f9f9' }}>
					{t('Персонажи')}
				</Link>
				<div className='search__wrapper' onClick={() => focusOn('name_input')}>
					<div className='block'>
						<SearchOutlined />
					</div>
					<input
						type='text'
						placeholder='Имя персонажа'
						id='name_input'
						onChange={e => searchCharacter(e.target.value)}
					/>
				</div>
				<div
					className='filter__wrapper flex'
					onClick={() => setShowModal(true)}
				>
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
			{showModal && (
				<div className='modal'>
					<div className='modal-content'>
						<div className='filter_wrapper_modal'>
							<h2>Фильтры</h2>
							<div className='raceFilt'>
								<p>Race:</p>
								<select
									defaultValue={filterRace}
									onChange={e => {
										setFilterRaces(e.target.value)
										workFilter(e.target.value, filterClass)
									}}
								>
									<option value='none'>Любая</option>
									{races.map(race => (
										<option key={race.index} value={race.index}>
											{race.name}
										</option>
									))}
								</select>
							</div>
							<div className='classFilt'>
								<p>Class:</p>
								<select
									defaultValue={filterClass}
									onChange={e => {
										setFilterClass(e.target.value)
										workFilter(filterRace, e.target.value)
									}}
								>
									<option value='none'>Любая</option>
									{classes.map(cls => (
										<option key={cls.index} value={cls.index}>
											{cls.name}
										</option>
									))}
								</select>
							</div>
							<button onClick={() => setShowModal(false)}>Закрыть</button>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
