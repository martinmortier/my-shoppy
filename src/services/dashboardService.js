import axios from "axios"
import apiURL from "../config/apiURL"

const category_product = async () => {
    const response = await axios.get(`${apiURL.currentURL}/dashboard`) 
    return response.data
}

const dashboardService = { category_product }

export default dashboardService