import {useContext, useEffect} from 'react'
import { AppContext } from './context/Context'
import UserPov from './UserPov'
import UserEnemy from './UserEnemy'

function Room() {
  const {globalUser,users} = useContext(AppContext)
  return (
    <div>
      <h1>Username: {globalUser}</h1>
      <h1>Enemy:{users.filter(e=>e.nickname!==globalUser)[0].nickname}</h1>

      <UserEnemy></UserEnemy>
      <br />
      <h1></h1>
      <hr />
      <h1></h1>
      <br />
      <UserPov></UserPov>
    </div>
  )
}

export default Room
