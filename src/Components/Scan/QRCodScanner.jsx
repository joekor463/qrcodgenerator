import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { SCAN_DATA } from '../../constants'
import s from './qrCodScanner.module.css'

export const QRCodScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = (result) => {
		if (!result) return
		setScanned(result.text)
	
		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		if (prevData.includes(result.text)) return

		localStorage.setItem(
			SCAN_DATA, 
			JSON.stringify([...result.text]))
  }
	//console.log(SCAN_DATA)

	return (
		<div className={s.container}>
			<QrReader
				scanDelay={1000}
        onResult={scanHandler}
        containerStyle={{ width: '500px' }}
      />
			<p className={s.result}>{scanned}</p>
		</div>
	)
}