import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"
import classes from "./UserList.module.css"

const UserList =(props)=>{

    const [stop , setStop] = useState(null)
    const [data, setDate] = useState([])


    const stopChangeHandler = (event)=>{
         setDate(props.users.filter((user)=> user.id !=event.target.id))
        setStop ({
            title:'Удаление пользователя',
            messega:'Вы действительно хотите удалить?'
        })
    }
    const deleteHandler = (event)=>{
          if(event.target.type==='button'){
              props.onGetData(data)
              setStop(null)
          }
    }
    const cancelHandler=(event)=>{
         if(event.target.type ==='button'){
             setStop(null)
         }
    }





    return(
        <>
        {stop && (<ErrorModal  title={stop.title} messega={stop.messega} onConfirm={deleteHandler} >
               <Button onClick={cancelHandler}>cancel</Button>
            </ErrorModal>)}
        <Card className={classes.users}>
        <ul>
            {props.users.map((user)=>(
                
             <li key={user.id}>
                
                 {user.name} ({user.age} yaers old)
                 <Button onClick={stopChangeHandler} id={user.id}>delete</Button>
             </li>
            )
            )}
        </ul>
    </Card>
    </>
    )
    

}
export default UserList