import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppTheme } from './theme/AppTheme'
import { JournalApp } from './JournalApp'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTheme children={<JournalApp />} />
  </StrictMode>,
)
