import axios from "axios"
import apiURL from "../config/apiURL"

const addCategory = async (name, id_shop) => {
    if(name && id_shop){
        const newCategory = {
            name: name,
            id_shop: id_shop 
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