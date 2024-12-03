import { Flex } from 'antd'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import CreateList from '../Buttons/createList'


export interface footerDProps {
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

export const FooterD = ({ userCharacters }: footerDProps) => {
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

	return (
		<footer>
			<Flex vertical={false} justify='space-around' align='center'>
				<Button label='create room' />
				<div className='join flex'>
					<Input
						type='text'
						placeholder='Join Code'
						style={{
							borderRadius: '19px 0 0 19px',
							width: '20dvw',
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
				<CreateList userCharacters={userCharacters} />
			</Flex>
		</footer>
	)
}

export default FooterD
