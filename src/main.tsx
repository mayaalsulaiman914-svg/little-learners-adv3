import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash/ScrollToHash.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
   <ScrollToHash />
     <App />
   </BrowserRouter>
  </StrictMode>,
)
