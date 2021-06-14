import { useEffect } from 'react';
import './App.css';
import Product from '../components/Product';
import userService from '../services/userService';
function App() {

  const getUsers = async () => {
    const users = await userService.getAll()
    console.log(users);
  }
  useEffect(() => {
    getUsers()
  },[])
  return (
    <div>
      <Product />
    </div>
  )
}

export default App;
