import { Flex } from 'antd'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

export const FooterD = () => {
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
							width: "20dvw"
						}}
					/>
					<Button
						label='Join'
						style={{
							borderRadius: '0 19px 19px 0',
						}}
					/>
				</div>

				<button className='create__list'>
					<span>
						<svg
							height='24'
							width='24'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M0 0h24v24H0z' fill='none'></path>
							<path
								d='M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z'
								fill='currentColor'
							></path>
						</svg>
						Create
					</span>
				</button>
			</Flex>
		</footer>
	)
}

export default FooterD
