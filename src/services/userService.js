import axios from 'axios'
import apiURL from '../config/apiURL'

const getAll = async () => {
    const response = await axios.get(`${apiURL.currentURL}/users`)
    return response.data
}

const userService = {
    getAll
}
export default userService