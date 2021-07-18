import axios from "axios"
import apiURL from "../config/apiURL"

const addCategory = async (name, shop_id) => {
    if(name && shop_id){
        const newCategory = {
            name: name,
            shop_id: shop_id
        }
        await axios.post(`${apiURL.currentURL}/category`,newCategory);
    }else{
        console.error("Name or shop_id params not found")
    }
}

const getCategories = async () => {
    return await axios.get(`${apiURL.currentURL}/category`)
}

const categoryService = {
    addCategory,
    getCategories,
}

export default categoryService