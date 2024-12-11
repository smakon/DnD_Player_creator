import { Bounce, toast, ToastPosition } from 'react-toastify'

interface notifyProps{
	appearance?: 'success' | 'warn' | 'info' | 'error'
   message?: string,
   theme?: 0 | 1,
   position?: ToastPosition,
}
export const createNotify = ({
	appearance = 'success',
	message = 'Success',
	theme = 1,
	position = 'top-center',
}: notifyProps) => {
	// ! Функция по созданию алертиков
	// * принимает в себя вид алерта и сообщение алерта
	switch (appearance) {
		case 'success':
			return toast.success(message, {
				position: position,
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: theme == 0 ? 'light' : 'dark',
				transition: Bounce,
			})
		case 'warn':
			return toast.warn(message, {
				position: position,
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				transition: Bounce,
			})
		case 'info':
			return toast.info(message, {
				position: position,
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: theme == 0 ? 'dark' : 'light',
				transition: Bounce,
			})
		case 'error':
			return toast.error(message, {
				position: position,
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: theme == 0 ? 'dark' : 'light',
				transition: Bounce,
			})
		default:
			toast(message, {
				position: position,
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: theme == 0 ? 'dark' : 'light',
				transition: Bounce,
		})
	}
}
