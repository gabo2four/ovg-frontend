import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Inicio from './Inicio'
import Room from './Room'
import Login from './Login'
import NewMatch from './components/NewMatch'
import HealthComponent from './HealthComponent'
import BowlOfDices from './BowlOfDices'
import Dices from './Dices'
import UserPov from './UserPov'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className="App h-screen">
          <Login></Login>
        </div>}>
        </Route>  
        <Route path='/inicio' element={<Inicio></Inicio>}></Route>
        <Route path='/room/:id' element={<Room></Room>}></Route>
      </Routes>  
      
      
    </BrowserRouter>
  )
}

export default App
