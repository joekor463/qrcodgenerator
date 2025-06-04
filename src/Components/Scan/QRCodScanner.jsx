import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import { SCAN_DATA } from '../../constants'
import s from './qrCodScanner.module.css'

export const QRCodScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = (result) => {
		setScanned(result[0].rawValue)
	
		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		localStorage.setItem(
			SCAN_DATA, 
			JSON.stringify([...result[0].rawValue]))
  }
	//console.log(SCAN_DATA)

	return (
		<div className={s.container}>
			
			<Scanner classNames={s.result}
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