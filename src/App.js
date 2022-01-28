import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState , }from 'react'


function App() {
  const [ users, setUsers] = useState([])

  const AddUserHandler = (name, age)=>{
    setUsers([...users, {name, age, id:Math.random().toString()}])
  }
  const getData = (data)=>{
    setUsers(data)
  }
  return (
    <React.Fragment>

        <AddUser  onAddUser={AddUserHandler}/>
        <UserList  users={users} onGetData={getData} />
    </React.Fragment>
  );
}

export default App;
