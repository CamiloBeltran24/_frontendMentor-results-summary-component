import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SummaryResult from './SummaryResult.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SummaryResult />
  </StrictMode>,
)
