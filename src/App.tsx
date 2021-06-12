import { useEffect } from 'react';
import './App.css';
import userService from './services/userService';
function App() {

  const getUsers = async () => {
    const users = await userService.getAll()
    console.log(users);
  }
  useEffect(() => {
    getUsers()
  },[])
  return (
    <div>Hello world</div>

  )
}

export default App;
