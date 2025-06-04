import { Route, Routes } from "react-router-dom"
import { Navigation } from './Navigation'
import { QRCodGenerator } from './QRCodGenerator'
import { QRCodScanner } from './QRCodScanner'


export const Layout = () => {
	 return (
	 		<div>
				<Navigation />
					<Routes>
						 	<Route path="/generate" element={<QRCodGenerator/>}/>
							<Route path="/scan" element={<QRCodScanner/>}/>
					</Routes>
			</div>
	)
}