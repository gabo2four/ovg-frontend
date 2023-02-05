import BowlOfDices from './BowlOfDices'
import HealthComponent from './HealthComponent'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './context/Context'
import { dataDices } from './Constants/data'

function UserEnemy() {

  const [enemyDices,setEnemyDices] = useState([])
  const [enemyDicesSelected,setEnemyDicesSelected] = useState([])

  const {socket,throwDices,removeDiceSelected,dicesSelected} = useContext(AppContext)

  socket.on("posi-enemy-dices",(posiEnemyDices)=>{
    console.log(posiEnemyDices)
    setEnemyDices(posiEnemyDices)
  })

  socket.on("enemy-selected-dice",(eds,bool,diceId)=>{
    setEnemyDicesSelected(eds)
    if(diceId && bool){
      const diceName = document.getElementsByClassName(diceId)[0]
      console.log("Enemyclase",diceName)
      diceName.className+=" invisible "
    }else if(diceId && !bool){
      const diceName = document.getElementsByClassName(diceId)[0]
      console.log("EnemyclassRM",diceName)
      diceName.classList.remove("invisible")
    }
  })

  useEffect(()=>{
    setEnemyDices([0,0,0,0,0,0])
    setEnemyDicesSelected([])
  },[])

  return (
    <div className="rotate-180 h-52 grid grid-cols-3 gap-3">
      <div className='bg-black justify-items-end grid'><HealthComponent></HealthComponent>
      </div>
      <div className='bg-white justify-items-center grid'>
        <div className='grid grid-cols-3 gap-3'>
          <div></div>
          <div className='justify-items-center grid'>
          <div className="grid grid-cols-6 ">
            <div className="1 m-2 w-7 h-7 col-start-3 col-span-2 bg-white" ><img src={dataDices[enemyDices[0] ?? 0].url} alt="arrow"/></div>
            <div className="2 m-2 w-7 h-7 col-start-1 col-end-3 bg-white"><img src={dataDices[enemyDices[1] ?? 0].url} alt="arrow"/></div>
            <div className="3 m-2 w-7 h-7 col-start-3 col-span-2 bg-white"><img src={dataDices[enemyDices[2] ?? 0].url} alt="arrow"/></div>
            <div className="4 m-2 w-7 h-7 col-end-7 col-span-2 bg-white" ><img src={dataDices[enemyDices[3] ?? 0].url} alt="arrow"/></div>
            <div className="5 m-2  w-7 h-7 col-start-2 col-span-2 bg-white"><img src={dataDices[enemyDices[4] ?? 0].url} alt="arrow"/></div>
            <div className="6 m-2 w-7 h-7 col-start-4 col-span-2 bg-white" ><img src={dataDices[enemyDices[5] ?? 0 ].url} alt="arrow"/></div>
          </div>
          {/* <button onClick={()=>{throwDices()}}>Lanzar</button> */}
          </div>
          <div className='justify-items-center grid'>
            {enemyDicesSelected.map(e=>(
              <div className='w-7 h-7'><img src={e.url} alt={e.name}/></div>
            ))}
          </div>
      
        </div>
      </div>

    </div>
  )
}

export default UserEnemy
