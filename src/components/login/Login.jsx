import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/reducers/userReducer'
const Login = () => {
    const [login, setLogin] = useState('') 
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        const user = {
            login: login,
            password: password
        } 
            dispatch(loginUser(user))
    }

    const handleChange = (event) => {
        console.log(event.target);
        switch(event.target.name) {
            case "login":
                setLogin(event.target.value)
                break
            case "password":
                setPassword(event.target.value)
                break
            default:
                break
        }
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={event => handleSubmit(event)}>
                <input type="email" name="login" onChange={event => handleChange(event)} value={login}/>
                <input type="password" name="password" onChange={event => handleChange(event)} value={password}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Login