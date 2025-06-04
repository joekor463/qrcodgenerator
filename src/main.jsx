import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Layout } from './Layout'
import { Navigation } from './Navigation'
import { QRCodGenerator } from './QRCodGenerator'
import { QRCodScanner } from './QRCodScanner'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation/>,
  },
  {
    path: "/generate",
    element: <QRCodGenerator/>,
  },
  {
    path: "/scan",
    element: <QRCodScanner/>,
  }
]);


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
)
