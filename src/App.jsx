
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'
import Home from './home/Home'

function App() {
  return (
    <div>
     <NavItems/>
     <Home/>
      {/*<Outlet/>*/}
    </div>
  )
}

export default App
