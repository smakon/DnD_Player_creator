import { Flex } from 'antd'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { PlusOutlined } from '@ant-design/icons'
import { createCharacter } from '../../functions/user'


export interface footerMProps {
	userCharacters: {
		id: number
		user_id: number
		name: string
		class: string
		race: string
		create_date: string
		level: number
		created_at: string
	}[]
}

export const FooterM = ({userCharacters}: footerMProps) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.currentTarget
		button.classList.add('animate-shake')
		button.addEventListener(
			'animationend',
			() => {
				button.classList.remove('animate-shake')
			},
			{ once: true }
		)
	}

	const createList = () => {
		createCharacter()
		window.location.reload()
		window.location.href = `/character/${userCharacters[0].id + 1}`
	}
	return (
		<footer>
			<Flex vertical={false} justify='space-around' align='center'>
				<Button label='Create room' style={{}} />
				<div className='join flex'>
					<Input
						type='text'
						placeholder='Join Code'
						style={{
							borderRadius: '19px 0 0 19px',
							width: '25dvw',
						}}
					/>
					<button
						onClick={handleClick}
						className='join btn'
						style={{
							borderRadius: '0 19px 19px 0',
						}}
					>
						Join
					</button>
				</div>
				
				<Button
					onClick={() => createList()}
					label=''
					style={{
						border: '2px solid #24b4fb',
						backgroundColor: '#24b4fb',
						padding: '0px',
						width: '2rem',
						height: '2rem',
						borderRadius: '50%',
						color: '#fff',
						fontSize: '1.2rem',
					}}
				>
					<PlusOutlined />
				</Button>
			</Flex>
		</footer>
	)
}
