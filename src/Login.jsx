import { useContext,useState } from 'react'
import { AppContext } from './context/Context'
import { useNavigate } from "react-router-dom";

function Login() {
  
  const {socket,globalUser} = useContext(AppContext)
  const [nick,setNick] = useState("")

  const navigate = useNavigate();

  const submitNickname = (e) =>{
    e.preventDefault()
    console.log("enviado")
    socket.emit("login-user",nick,(comp)=>{
      if(comp){
        return navigate('/inicio')
      }
    })

  }

  return (
    <div>
        <form onSubmit={submitNickname}>
            <input type="text" placeholder='Enter your Nickname' onChange={(e)=>{setNick(e.target.value)}} required/>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Login
