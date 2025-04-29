import Routes from '@/router'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return <Routes auth={''} location={location} match={{ params: {} }} />
}

export default App
