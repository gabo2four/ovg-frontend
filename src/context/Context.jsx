import { createContext,useState,useEffect } from "react";
import io from 'socket.io-client'
import { dataDices } from "../Constants/data";

const socket = io('http://127.0.0.1:5001/')

export const AppContext = createContext()

export function AppContextProvider(props){

    const [buscar,setBuscar] = useState("")
    const [diceInvisible,setDiceInvisible] = useState("")
    const [users,setUsers] = useState([])
    const [globalUser,setGlobalUser] = useState("")
    const [dicesSelected,setDicesSelected] = useState([])
    const [compDice,setCompDice] = useState(Boolean)
    const [positionDices,setPositionDices] = useState([])


    useEffect(() => {
        console.log(socket.room)
        setBuscar("Buscar Partida");
        setUsers([])
        setDicesSelected([])
        setGlobalUser("")
        setDiceInvisible("")
        setPositionDices([0,1,2,3,4,5])
        
    }, []);

    const searchDuel = () =>{
        function startSearch(){
          socket.emit("startSearch","buscando...",globalUser)
          return "Buscando..."
        }
        function stopSearch(){
          socket.emit("stopSearch","paró de buscar")
          return "Buscar Partida"
        }
        const buscarValue = "Buscar Partida" == buscar ? startSearch() : stopSearch()
        setBuscar(buscarValue)
    }

    function setNickFunction(data){
        setGlobalUser(data)
    }

    socket.on("logged",(data)=>{
        setNickFunction(data)

        // localStorage.setItem('nick',data)
        // location="/inicio"
    })

    function setUsersFunction(data){
        setUsers(data)
    }

    function throwDices(idRoom){
        let newPositions = []
        for(let i = 0;i<6;i++){
            const rdm = Math.floor(Math.random() * 6);
            newPositions.push(rdm)
        }
        console.log(positionDices)
        setPositionDices(newPositions)
        socket.emit('throw-dices',newPositions,idRoom)
        
    }

    function selectDice(dice,diceId){
        const diceWithDiceId = {
            diceId:diceId,
            name:dice.name,
            url:dice.url,
        }
        setDicesSelected([...dicesSelected,diceWithDiceId])
        setDiceInvisible(diceId)
        socket.emit('selected-dice',[...dicesSelected,diceWithDiceId],true,diceId)
        setCompDice(true)
    }

    function removeDiceSelected(diceId){
        const newArr = dicesSelected.filter(e=>e.diceId!==diceId)
        setDicesSelected(newArr)
        socket.emit('selected-dice',newArr,false,diceId)
        setDiceInvisible(diceId)
        setCompDice(false)

    }
    

    return(
        <AppContext.Provider value={
            {
                buscar,
                users,
                searchDuel,
                socket,
                globalUser,
                setUsersFunction,
                selectDice,
                dicesSelected,
                dataDices,
                diceInvisible,
                compDice,
                removeDiceSelected,
                throwDices,
                positionDices
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}