import React, { useEffect } from 'react'
import { useState } from 'react'
import HealthRock from './HealthRock'

function HealthComponent() {
  const [countDivs,setCountDivs] = useState(10)

  useEffect(() => {
    setCountDivs(15)
  }, []);
  

  return (
    <div id='healthBox' className='w-60 grid grid-cols-5 gap-5'>
        {Array.from({length: countDivs}, (_, index) =>(
            <HealthRock key={index}></HealthRock>
        ))}
    </div>
  )
}

export default HealthComponent
