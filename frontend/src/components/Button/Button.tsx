import './Button.css'

export interface ButtonProps {
	/** Тип кнопки (button, submit)*/
	type?: 'button' | 'submit'
	/** Текст кнопки*/
	label?: string
	/** Стили*/
	style?: React.CSSProperties
	/** Класс*/
	className?: string
	/** Идентификатор поля ввода  Необходимо для стилей и работы с рефами, например, для активации фокуса поля ввода*/
	id?: string
	/** Обработчик нажатия на кнопку*/
	onClick?: () => void
	/** Дочерние элементы */
	children?: React.ReactNode
}

const Button = ({
	type = 'button',
	label = '',
	style = {},
	className ='',
   id = '',
   onClick = undefined,
   children=undefined,
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={'my__button ' + className}
			style={style}
         id={id}
         onClick={onClick}
		>
         {label}
         {children}
		</button>
	)
}

export default Button
