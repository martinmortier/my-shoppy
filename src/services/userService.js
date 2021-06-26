import axios from 'axios'
import apiURL from '../config/apiURL'

const getAll = async () => {
    const response = await axios.get(`${apiURL.currentURL}/user`)
    return response.data
}

const getUser = async user => {
    const response = await axios.post(`${apiURL.currentURL}/user/login`,{login: user.login, password: user.password})
    return response.data
}

const userService = {
    getAll,
    getUser
}
export default userService