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
						 	<Route path="/generate" element={<QRCodGenerator/>}/>
							<Route path="/scan" element={<QRCodScanner/>}/>
							<Route path="/generateHistory" element={<GenerateHistory/>}/>
							<Route path="/scanHistory" element={<ScanHistory/>}/>
					</Routes>
			</div>
	)
}