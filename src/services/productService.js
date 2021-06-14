import axios from 'axios'
import apiURL from '../config/apiURL'

const getAll = async () => {
    const response = await axios.get(`${apiURL.currentURL}/products`)
    return response.data
}

export default { getAll }