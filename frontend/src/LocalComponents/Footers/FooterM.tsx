import { Flex } from 'antd'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { PlusOutlined } from '@ant-design/icons'

export const FooterM = () => {
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
