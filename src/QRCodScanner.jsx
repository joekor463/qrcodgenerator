import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import s from './qrCodScanner.module.css'


export const QRCodScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = (result) => {
		console.log(result[0].rawValue)
	}


	return (
		<div className={s.container}>
			
			<Scanner classNames={s.result}
				allowMultiple 
				onScan={scanHandler } 
				components={{
						audio : false,
						finder : true
				}}
				styles={{container: {width :250}}} 
			/>
			<p className={s.result}>{scanned}</p>
		</div>
	)
}