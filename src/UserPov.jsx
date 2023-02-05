import BowlOfDices from './BowlOfDices'
import HealthComponent from './HealthComponent'
import { useContext } from 'react'
import { AppContext } from './context/Context'


function UserPov() {

  const {throwDices,removeDiceSelected,dicesSelected} = useContext(AppContext)

  const idRoom = window.location.pathname.split("/")[2]

  return (
    <div className="h-52 grid grid-cols-3 gap-3">
      <div className='bg-black justify-items-end grid'><HealthComponent></HealthComponent>
      </div>
      <div className='bg-white justify-items-center grid'>
        <div className='grid grid-cols-3 gap-3'>
          <div></div>
          <div className='justify-items-center grid'><BowlOfDices></BowlOfDices>
          <button onClick={()=>{throwDices(idRoom)}}>Lanzar</button>
          </div>
          <div className='justify-items-center grid'>
            {dicesSelected.map(e=>(
              <div className='w-7 h-7' onClick={()=>{removeDiceSelected(e.diceId)}}><img src={e.url} alt={e.name}/></div>
            ))}
          </div>
      
        </div>
      </div>

    </div>
  )
}

export default UserPov
