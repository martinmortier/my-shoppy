import axios from 'axios'
import apiURL from '../config/apiURL'

const getAll = async () => {
    const response = await axios.get(`${apiURL.currentURL}/product`)
    return response.data
}
//TODO: Making the back end
const getProductByCategory = async id => {
    const response = await axios.get(`${apiURL.currentURL}/products/productsByCategory/${id}`)
    return response.data
}

const productService = {
    getAll,
    getProductByCategory
}
export default productService