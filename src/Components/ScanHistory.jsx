import { QRCodeSVG } from 'qrcode.react'
import { SCAN_DATA } from '../constants'

export const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

	//console.log('data -- ', data)
	return (
			<div>
				{data.map((text) => (
					<div>
							<QRCodeSVG 
						value={text}
						size={200}	
					/> 
					<p key={text}>{text}</p>
					</div>
					
				))}
			</div>	
	)
}