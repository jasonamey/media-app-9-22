import { createRoot } from 'react-dom/client'
import App from './App'
import { UserAuthContextProvider } from './context/UserAuthContext'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <UserAuthContextProvider>
    <App />
  </UserAuthContextProvider>
)
