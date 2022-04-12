import React, {useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';

const App = () => {
  const userList = useSelector((state) => state.users.value);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [newUsername, setNewUsername] = useState('');



  return (
    <div className='App'>
      <div className='addUser'>
        <input type='text' placeholder='your name' onChange={(event)=> setName(event.target.value)} />
        <input type='text' placeholder='your username' onChange={(event)=> setUserName(event.target.value)}/>
        <button onClick={()=> dispatch(addUser({ id: userList[userList.length -1].id+1, name: name, username : userName}))}>Add user</button>
      </div>
      <div className='displayUsers'>
        {
          userList.map((user) => {
            return (
              <div>
                <h1>{user.name}</h1>
                <h1>{user.username}</h1>
                <input
                  type='text'
                  placeholder='New userName'
                  onChange={(event) => setNewUsername(event.target.value)}
                />
                <button onClick={()=> dispatch(updateUsername({id: user.id, username : newUsername}))}>Update userName</button>
                <button onClick={()=> dispatch(deleteUser({id: user.id}))}>delete user</button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App