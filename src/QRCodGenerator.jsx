import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import s from './qrCodGenerator.module.css'


export const QRCodGenerator = () => {
	const [value, setValue] = useState('hello')
	const [result, setResult] = useState('')

	const onClickHandler = (event) => {
		//console.log('wewewew', event)
		setResult(value)
		setValue('')
	}

	const onChangeHandler = (event) => {
		setValue(event.target.value )
		setResult('')
	}
	console.log(result )
	return (
		<div className={s.container}>
			<input 
				type="text" 
				value={value} 
				onChange={onChangeHandler} 
				className={s.result}
			/>
			<button type="button" onClick={onClickHandler}>Сгенерировать  QR </button>
			{result !== '' && (
					<QRCodeSVG 
						value={result}
						size={200}	
					/> 
			)}
			
		</div>
	)
}