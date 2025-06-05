import { Route, Routes } from "react-router-dom"
import { QRCodGenerator } from './Components/Generate/QRCodGenerator'
import { GenerateHistory } from './Components/GenerateHistory'
import { Navigation } from './Components/Navigation/Navigation'
import { QRCodScanner } from './Components/Scan/QRCodScanner'
import { ScanHistory } from './Components/ScanHistory'

export const Layout = () => {
	 return (
	 		<div>
					<Navigation />
					<Routes>
						 	<Route path="/qr-code/generate" element={<QRCodGenerator/>}/>
							<Route path="/qr-code/scan" element={<QRCodScanner/>}/>
							<Route path="/qr-code/generateHistory" element={<GenerateHistory/>}/>
							<Route path="/qr-code/scanHistory" element={<ScanHistory/>}/>
					</Routes>
			</div>
	)
}