import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'
const AddUser = (props) => {
    const [username,  setUsername] = useState('')
    const [age,  setAge] = useState('')

    const [error , setError] = useState(null)
          
    const usernameChangeHandler = (event)=>{
        setUsername(event.target.value)
    }

   const ageChangeHandler = (event)=>{
        setAge(event.target.value)
   }

   const  AddUserHandler = (event)=>{
    event.preventDefault()
    if(username.trim().length === 0 || age.trim().length ===0){
        setError({
            title:'invalid input',
            messega:'please enter a valid and age (non empty values)'
        })
        return;
    }
    if(+age < 1){
        setError({
            title:'invalid input',
            messega:'please enter a valid and age(>0)'
        })
        return;
    }

    props.onAddUser(username,age)


    setUsername('')
    setAge('')
   }    
   const errorHandler = ()=>{
       setError(null)
   }

	return (
        <>
       { error && <ErrorModal title={error.title} messega={error.messega} onConfirm={errorHandler}/>}
		<Card className={classes.input}>
			<form onSubmit={AddUserHandler}>
				<label htmlFor='username'>Username</label>
				<input id='username' type='text' value={username} onChange={usernameChangeHandler} />
				<label htmlFor='age'>Age(years)</label>
				<input id='age' type='number' value={age} onChange={ageChangeHandler} />
				<Button type='submit'>Add User</Button>
			</form>
		</Card>

        </>
	)
}
export default AddUser
