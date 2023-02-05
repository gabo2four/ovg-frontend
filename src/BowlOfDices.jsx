import React, { useEffect } from 'react'
import Dices from './Dices'
import { useContext } from 'react'
import { AppContext } from './context/Context'

function BowlOfDices() {



  const { dataDices,dicesSelected,selectDice,diceInvisible,compDice,removeDiceSelected,positionDices } = useContext(AppContext)
  
  useEffect(()=>{
    if(diceInvisible && compDice){
      const diceName = document.getElementsByName(diceInvisible)[0]
      console.log("clase",diceName)
      diceName.className+=" invisible "
    }else if(diceInvisible && !compDice){
      const diceName = document.getElementsByName(diceInvisible)[0]
      console.log("classRM",diceName)
      diceName.classList.remove("invisible")
    }
  },[dicesSelected])

  console.log("BowlOfDices",positionDices)

  return (
    <div className='px-2 w-36 h-36 bg-amber-900 rounded-full'>
      <div className="grid grid-cols-6 ">
        <div className="divIn m-2 w-7 h-7 col-start-3 col-span-2 bg-white" name="1" onClick={()=>{selectDice(dataDices[positionDices[0]],"1")}}><img src={dataDices[positionDices[0] ?? 0].url} alt="arrow"/></div>
        <div className="divIn m-2 w-7 h-7 col-start-1 col-end-3 bg-white" name="2" onClick={()=>{selectDice(dataDices[positionDices[1]],"2")}}><img src={dataDices[positionDices[1] ?? 0].url} alt="arrow"/></div>
        <div className="divIn m-2 w-7 h-7 col-start-3 col-span-2 bg-white" name="3" onClick={()=>{selectDice(dataDices[positionDices[2]],"3")}}><img src={dataDices[positionDices[2] ?? 0].url} alt="arrow"/></div>
        <div className="divIn m-2 w-7 h-7 col-end-7 col-span-2 bg-white" name="4" onClick={()=>{selectDice(dataDices[positionDices[3]],"4")}}><img src={dataDices[positionDices[3] ?? 0].url} alt="arrow"/></div>
        <div className="divIn m-2  w-7 h-7 col-start-2 col-span-2 bg-white" name="5" onClick={()=>{selectDice(dataDices[positionDices[4]],"5")}}><img src={dataDices[positionDices[4] ?? 0].url} alt="arrow"/></div>
        <div className="divIn m-2 w-7 h-7 col-start-4 col-span-2 bg-white" name="6" onClick={()=>{selectDice(dataDices[positionDices[5]],"6")}}><img src={dataDices[positionDices[5] ?? 0 ].url} alt="arrow"/></div>
      </div>
      
        
    </div>
  )
}

export default BowlOfDices
