import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider} from 'react-query'
import queryClient from '@/queries/client'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { AppProvider } from './contexts/appProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <HashRouter>
          <App />
        </HashRouter>   
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
