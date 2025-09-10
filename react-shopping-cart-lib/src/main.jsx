import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DemoApp from './DemoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoApp />
  </StrictMode>,
)
