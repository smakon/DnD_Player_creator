import './Input.css'
import { AllHTMLAttributes } from 'react';

export interface InputProps extends AllHTMLAttributes<InputProps> {
	/** Тип ввода*/
	type?:
		| 'text'
		| 'password'
		| 'button'
		| 'color'
		| 'checkbox'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'time'
		| 'url'
		| 'week'
	/** Значение поля ввода*/
	value?: string
	/** Обработчик изменения поля ввода*/
	// onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	/** Подсказка для поля ввода*/
	placeholder?: string
	/** Дополнительные стили для поля ввода*/
	style?: Object
	/** Атрибут required*/
	required?: boolean
	/** Класс для поля ввода*/
   className?: string
   /** Идентификатор поля ввода  Необходимо для стилей и работы с рефами, например, для активации фокуса поля ввода*/
   id?: string
}

const Input = ({type = 'text', value, placeholder = 'Text...', style={}, required=false, className, id}: InputProps) => {
   return (
      <input
         type={type}
         value={value}
         style={style}
         placeholder={placeholder}
         required={required}
         className={className}
         id={id}
      />
   );
}

export default Input;
