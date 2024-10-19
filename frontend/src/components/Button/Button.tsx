import './Button.css'

export interface ButtonProps {
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
	label = '',
	style = {},
	className ='',
   id = '',
   onClick = undefined,
   children=undefined,
}: ButtonProps) => {
	return (
		<button
			type="button"
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
