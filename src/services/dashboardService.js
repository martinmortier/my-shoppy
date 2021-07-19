import axios from "axios"
import apiURL from "../config/apiURL"

const category_product = async () => {
    const data = await axios.get(`${apiURL.currentURL}/dashboardCategory`) 
    return data
}