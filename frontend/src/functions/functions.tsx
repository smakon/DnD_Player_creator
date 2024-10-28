import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'


export function show_hide_password(
	setEye: React.Dispatch<React.SetStateAction<React.ReactNode>>
) {
	let input = document.querySelector('.password__input') as HTMLInputElement
	let target = document.querySelector('.button_show') as HTMLInputElement
	if (input.getAttribute('type') === 'password') {
		target.classList.add('view')
		setEye(<EyeInvisibleOutlined />)
		input.setAttribute('type', 'text')
	} else {
		target.classList.remove('view')
		setEye(<EyeOutlined />)
		input.setAttribute('type', 'password')
	}
	return false
}
