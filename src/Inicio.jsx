import { useContext, useEffect } from 'react'
import { AppContext } from './context/Context'
import { useNavigate } from 'react-router-dom'

function Inicio() {
  const {users,buscar,searchDuel,globalUser,socket,setUsersFunction} = useContext(AppContext)
  const navigate = useNavigate()


  socket.on("in-match",(arrUsers,idRoom)=>{
    console.log(arrUsers)
    setUsersFunction(arrUsers)
    navigate(`/room/${String(idRoom)}`)
  })  
    

  return (
    <div className='h-screen  grid justify-items-center'>
      <div><h1>{globalUser}</h1></div>
      <div className='grid grid-cols-2 gap-2 h-screen place-content-center '>
      <div onClick={()=>{searchDuel()}} className='w-64 flex items-center bg-teal-700  lg:col-span-1 h-96'><div className='text-center w-screen'>
        {users.length == 0 ? buscar : users}</div></div>
      <div className='w-64 flex items-center bg-teal-700  lg:col-span-1 h-96 '><div className='text-center w-screen'>Desafiar Amigo</div></div>
      </div>
    </div>
  )
}

export default Inicio
