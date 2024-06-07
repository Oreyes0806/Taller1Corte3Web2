import './App.css'
import { AppRoutes } from './AppRoutes'
import { UserProvider } from './context/UserProvider'
function App() {

  return (
    <>
      <UserProvider>
        <AppRoutes/>
      </UserProvider>
    </>
  )
}

export default App
